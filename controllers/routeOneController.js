"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rTwo = exports.rOne = void 0;
const requests_1 = require("./utils/requests");
function routeOneGET(req, res) {
    req.headers;
    var localReq = new requests_1.Requests({
        url: "https://services.odata.org/northwind/northwind.svc/Categories",
        method: "get"
    }, {
        req: req
    });
    localReq.execute().then((data) => {
        res.json(data);
    });
}
exports.rOne = routeOneGET;
function routeOnePOST(req, res) {
    res.send('Route 1 POST reached');
}
exports.rTwo = routeOnePOST;
