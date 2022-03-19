import { Router } from "express";
import userModel from "../models/user_model";
import { check, validationResult } from "express-validator";
import LocalStrategy from "passport-local";
import passport from "passport";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import cvModel from "../models/cv_model";
const authRouter = Router();

let validations = [
    check("email")
      .isEmail()
      .withMessage("The email you have entered is not valid")
      .contains("@")
      .withMessage("The email you have entered does not contain an @"),
  
    check("password")
      .isLength({ min: 5 })
      .withMessage("The password must have at least 5 characters")
];


// ----- LOGIN --- -----//



authRouter.post('/login', (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return res.send(err);
      }
  
      if (!user) {
        return res.status(404).send(info)
      }
  
      req.logIn(user, function(err) {
          if (err) {
              console.log("ERRRRRROOOOOR");
          return res.status(404).send(err);
        }
        console.log("'nice : " + user);
        return res.status(200).json(user);
      });
  
    })(req, res, next);
  });





// ------->  SIGNUP <------------------------//

// TODO REFACTOR

authRouter.post('/signup',  validations, async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const userMail = req.body.email;
    let user = await userModel.findOne({
        email : userMail
    });
    bcrypt.hash(req.body.password, 10).then(function (hash) {
     
       
        if (user) {
             res.status(400).send("User already registered.");
        } else {
           


            try {

                const   newUser = userModel({
                       "username": req.body.username,
                       "email": req.body.email,
                       "password": hash
                });
              
                
                   newUser.save();
                   res.status(200).send(newUser);
               } catch (error) {
                   res.status(400).send(error);
           
               }
        }
       
       });
       
   } else {
       
        
    return res.status(422).json({ error: errors.array() });
   }
    });
 

export default authRouter;