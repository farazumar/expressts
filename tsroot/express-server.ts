import express, { Express, Request, Response } from 'express';
import path from 'path';
import { existsSync } from 'fs';
// import glob from 'glob';


class ExpressServer {
    app: Express;
    port: any;
    baseDir: any;
    constructor(portSent?: any) {
        this.app = express();
        this.port = portSent ? portSent : (process.env.PORT || 4000);
        this.baseDir = process.cwd();
    }
    loadRoutes(){
        return new Promise((resolve,reject) =>{
            let expressFile = path.join(this.baseDir, 'server/server.js');
            if (existsSync(expressFile)) {
                import(expressFile).then((serverfeature) =>{
                    serverfeature.loadAppFeatures(this.app);
                });
            }
            resolve(1);
        });
    }
    start() {
        this.loadRoutes().then(() =>{
            this.app.listen(this.port, () => {
                console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
            });
        });
    }
}

export {ExpressServer};