import express from "express";
import cvModel from "../models/cv_model";
const cvsRouter = express.Router();
cvsRouter.post('/add', (req, res) => {

    try {
        const newCv = cvModel(req.body);
        newCv.save();

        res.status(200).send(newCv);





    } catch (error) {
        res.status(404).send(error);
        console.log(error)
    }
});
export default cvsRouter;