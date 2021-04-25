"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../routes/auth");
const buddy_1 = require("../routes/buddy");
const buddyInventory_1 = require("../routes/buddyInventory");
const product_1 = require("../routes/product");
const role_1 = require("../routes/role");
function registerRoutes(app) {
    auth_1.default(app);
    buddy_1.default(app);
    buddyInventory_1.default(app);
    product_1.default(app);
    role_1.default(app);
}
exports.default = registerRoutes;
//# sourceMappingURL=registerRoutes.js.map