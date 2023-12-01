"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    app.route("/healthCheck").get((req, res) => {
        res.send('Express + TypeScript Server OK');
    });
}
exports.default = routes;
