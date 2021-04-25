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
const buddyController_1 = require("../controllers/buddyController");
const buddyRoutes = (app, buddyController = buddyController_1.BuddyController.getInstance()) => {
    /**
     * @swagger
     * /api/v1/buddy/register/{parentId}/{mobileNum}/{buddyRole}:
     *   post:
     *     summary: Register a Buddy user.
     *     parameters:
     *       - in: path
     *         name: parentId
     *         required: true
     *         description: Id of the user account
     *         schema:
     *           type: integer
     *       - in: path
     *         name: mobileNum
     *         required: true
     *         description: New Mobile Number of the user.
     *         schema:
     *           type: integer
     *       - in: path
     *         name: buddyRole
     *         required: true
     *         description: Role Name of the buddy user.
     *         schema:
     *           type: string
     *     responses:
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *
    */
    app.route('/api/v1/buddy/register/:parentId/:mobileNum/:buddyRole')
        .post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield buddyController.postBuddy(req, res, next); }));
    /**
     * @swagger
     * /api/v1/tasks:
     *   get:
     *     summary: List the tasks.
     *     responses:
     *       201:
     *         $ref: '#/components/responses/Success'
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *
     *
    */
    app.route('/api/v1/tasks')
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield buddyController.listTasks(req, res, next); }));
};
exports.default = buddyRoutes;
//# sourceMappingURL=buddy.js.map