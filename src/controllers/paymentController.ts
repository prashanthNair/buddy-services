import { Request, Response } from "express";
const Razorpay = require('razorpay')
const instance = new Razorpay({
    key_id: 'rzp_test_weKYKG5PnHCm2c',
    key_secret: 'QOgPMoUXgnLsg5VPa4MDrsbL'
})
export const createOrder = async (req: Request, res: Response) => {

    try {
       
        const order = await instance.orders.create({
            amount: 1000,
            receipt: "reciept_" + Math.random() * 10000,
            payment_capture: true
        })
        return res.status(200).json({ order })
    } catch (e) {
        return res.status(200).json(e.description)
    }
}

export const fetchPayment = async (req: Request, res: Response) => {
    const { razorpay_payment_id, amount, currency  } = req.body;
    try {
        const capture = await instance.payments.capture(razorpay_payment_id, amount, currency)
        return res.status(200).json({ capture })
    } catch (e) {
        return res.status(200).json(e)
    }
}
