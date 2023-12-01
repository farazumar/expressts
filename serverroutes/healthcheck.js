"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
function routes(app) {
    app.route("/healthCheck").get((req, res) => {
        res.send('Express + TypeScript Server OK');
    });
}
exports.routes = routes;
