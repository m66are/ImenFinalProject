import express from "express";
import { check, validationResult } from "express-validator";


// Email and password form validation
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
  




// //

// export const isFormValid =  => {
//     console.log("Called");
//     validations, (req, res, next) => {
//         const errors = validationResult(req);
//         if (errors.isEmpty) {
//             console.log("no errors");
//             next();
//         } else {
//             return res.status(422).json({ error: errors.array() });
//         }
//         }
// }  
// }  
   
       
    

        
  
    

