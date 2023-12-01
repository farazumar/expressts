import express, { Express, Request, Response } from 'express';
import * as routeOneController from '../controllers/routeOneController';

export default function routes(app: Express){
app.route("/route1").get(routeOneController.rOne);
}