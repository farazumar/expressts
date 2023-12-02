import axios, {isCancel, AxiosError, AxiosResponse, AxiosRequestConfig, isAxiosError} from 'axios';
import { Request } from 'express';
interface exConfig {
    sso?: Boolean;
    req: Request;

}
class Requests {
    url: string = "";
    method: string = "GET";
    data: any = "";
    auth: string | undefined;
    
    constructor(config: AxiosRequestConfig, extraConfig:exConfig) {
        this.url = config.url || "";
        this.method = config.method || "";
        this.data = config.data ? JSON.stringify(config.data) : this.data;
        if(extraConfig.sso){
            this.auth = extraConfig.req.headers.authorization
        }else{
            this.auth = config.headers?.Authorization ? config.headers.Authorization : ''; 
        }
        
    }

    execute():Promise<any>{
        return new Promise((resolve,reject) =>{
            axios({
                method: this.method,
                url: this.url,
                data:this.data,
                headers:{
                    Authorization: this.auth,
                    "Content-Type":"application/json"
                }
            }).then((response:AxiosResponse) =>{
                if(response.status >= 200 && response.status < 300){
                    resolve(response.data);
                }else if(response.status >= 300){
                    reject(response.data);
                }
            }).catch((e: AxiosError) =>{
                if(isAxiosError(e)){
                    reject(`Axios Error: Status is ${e.status}, message is ${e.message}`);
                }else{
                    reject(e);
                }
            });
        });
    }

}

export {Requests};