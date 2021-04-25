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
exports.BuddyInventoryController = void 0;
const buddyInventoryService_1 = require("../services/buddyInventoryService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class BuddyInventoryController {
    constructor() {
        this.buddyInventoryService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} buddyInventoryService
     */
    static getInstance(buddyInventoryService = buddyInventoryService_1.BuddyInventoryService.getInstance()) {
        if (!BuddyInventoryController.instance) {
            BuddyInventoryController.instance = new BuddyInventoryController();
        }
        BuddyInventoryController.instance.buddyInventoryService = buddyInventoryService;
        return BuddyInventoryController.instance;
    }
    /**
   * Insert into buddyInventory coloumn
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
    postBuddyInventory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let buddyInventoryData = {
                    ProductId: req.body.productId,
                    Type: req.body.type,
                    ProductCategory: req.body.productCategory,
                    CreatedDate: req.body.createdDate,
                    IsAvailable: req.body.isAvailable,
                    BuddyMargin: req.body.buddyMargin,
                };
                console.log;
                const result = yield this.buddyInventoryService.postBuddyInventory(buddyInventoryData);
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponse(res, "Sucessfull");
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
                }
            }
            catch (err) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
}
exports.BuddyInventoryController = BuddyInventoryController;
BuddyInventoryController.instance = null;
//# sourceMappingURL=buddyInventoryController.js.map