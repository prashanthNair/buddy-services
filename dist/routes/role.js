"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const roleController_1 = require("../controllers/roleController");
const roleRoutes = (app, roleController = roleController_1.RoleController.getInstance()) => {
    /**
     * @swagger
     * /api/v1/role/register:
     *   post:
     *     summary: Register into role table.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Role'
     *     responses:
     *       201:
     *         description: Role added successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *
    */
    app.route('/api/v1/role/register')
        .post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield roleController.postRole(req, res, next); }));
};
exports.default = roleRoutes;
//# sourceMappingURL=role.js.map