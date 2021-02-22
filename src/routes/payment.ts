import {Request, Response, NextFunction} from "express";
import { BuddyController } from "../controllers/buddyController";
import { createOrder, fetchPayment } from "../controllers/paymentController";

const paymentRoutes = (app) => {

    app.route('/api/v1/payment/create').post(createOrder);
    app.route('/api/v1/payment/verify').post(fetchPayment);
}
export default paymentRoutes;