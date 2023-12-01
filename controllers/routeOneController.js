"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rTwo = exports.rOne = void 0;
function routeOneGET(req, res) {
    res.send('Route 1 GET reached');
}
exports.rOne = routeOneGET;
function routeOnePOST(req, res) {
    res.send('Route 1 POST reached');
}
exports.rTwo = routeOnePOST;
