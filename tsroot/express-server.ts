import express, { Express, Request, Response } from 'express';
import path from 'path';
import { existsSync } from 'fs';
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob';



class ExpressServer {
    app: Express;
    port: any;
    baseDir: any;
    routerFiles: string[] = [];
    constructor(portSent?: any) {
        this.app = express();
        this.port = portSent ? portSent : (process.env.PORT || 4000);
        this.baseDir = process.cwd();
    }
    loadRoutes() {
        return new Promise((resolve, reject) => {
            try {
                let routesDir = path.join(this.baseDir, 'serviceRoutes/**/*.js');
                let files = globSync(routesDir);
                this.routerFiles = files;
                if (files.length !== 0) {
                    for (let file of files) {
                        import(file).then((fileMethods) => {
                            fileMethods.default(this.app);
                        });
                    }
                }
                resolve(1);
            }
            catch (e: unknown) {
                let msg:string = "Error Occured: ";
                if (typeof e === "string") {
                    msg += e.toUpperCase()
                } else if (e instanceof Error) {
                    msg += e.message
                }
                reject(msg)
            }
        });
    }
    loadFeatures() {
        return new Promise((resolve, reject) => {
            let expressFile = path.join(this.baseDir, 'server/serverFeatures.js');
            if (existsSync(expressFile)) {
                import(expressFile).then((serverfeature) => {
                    serverfeature.default(this.app);
                });
            }
            resolve(1);
        });
    }
    start() {
        this.loadFeatures().then(() => {
            this.loadRoutes().then(() => {
                this.app.listen(this.port, () => {
                    console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
                });
            });
        });
    }
}

export { ExpressServer };