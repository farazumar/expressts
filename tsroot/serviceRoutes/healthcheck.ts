import express, { Express, Request, Response } from 'express';

export default function routes(app: Express){
app.route("/healthCheck").get((req:Request,res:Response) =>{
    res.send('Express + TypeScript Server OK');
});
}