"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const registerRoutes_1 = require("./configuration/registerRoutes");
const cors = require("cors");
const api_doc_1 = require("./api-doc");
const apiErrorHandler_1 = require("./middlewares/apiErrorHandler");
var swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require("swagger-jsdoc");
class App {
    constructor() {
        this.app = express();
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: false,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'http://localhost:4200',
            preflightContinue: false
        };
        this.JSDocOptions = {
            // Swagger api doc meta data definitions
            swaggerDefinition: api_doc_1.swaggerDocument,
            // Paths to files containing OpenAPI definitions
            apis: ["./dist/models/jsdoc-components.js", "./dist/routes/*.js"]
        };
        this.config();
        registerRoutes_1.default(this.app);
        this.app.use(apiErrorHandler_1.notFoundErrorHandler);
        this.app.use(apiErrorHandler_1.errorHandler);
        console.log(__filename);
    }
    config() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        const swaggerSpec = swaggerJSDoc(this.JSDocOptions);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map