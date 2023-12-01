import express, { Express, Request, Response } from 'express';

function routeOneGET(req:Request,res:Response) : void {
    res.send('Route 1 GET reached');
  }

  function routeOnePOST(req:Request,res:Response) : void {
    res.send('Route 1 POST reached');
  }
    
export {routeOneGET as rOne,routeOnePOST as rTwo};