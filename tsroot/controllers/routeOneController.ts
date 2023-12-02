import express, { Express, Request, Response } from 'express';
import { Requests } from './utils/requests'

function routeOneGET(req: Request, res: Response): void {
  req.headers
  var localReq = new Requests({
    url: "https://services.odata.org/northwind/northwind.svc/Categories",
    method: "get"
  },{
    req : req
  });
  localReq.execute().then((data) => {
    res.json(data);
  });

}

function routeOnePOST(req: Request, res: Response): void {
  res.send('Route 1 POST reached');
}

export { routeOneGET as rOne, routeOnePOST as rTwo };