import LocalStrategy from "passport-local";
import userModel from "../models/user_model";
import bcrypt from "bcrypt";

import passport from "passport";
passport.serializeUser(function(user, done) {
    done(null, user.email);
  });
  
  passport.deserializeUser(function (user, done)  {
    let currentUser =  userModel.findOne({
        email: user.email,
    }).then((user) => {
        if (currentUser) {
            done(null, currentUser)
        }
    })
  });
passport.use(new LocalStrategy({ usernameField: 'email' },
   
    async (email, password, done) => {
        
            // getting user //
            let user = await userModel.findOne({
                email: email,
            }).then((user) => {
                if (user) {
                    console.log(`User ${user.email} `);
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err;
                            
                        } else if (isMatch) {
                            done(null,user);
                            
                        }
                        else {
                            done(null, false ,{ message: 'Wrong Password' });
                        }
                    })
                    
                } else {
                   done(null,false)
                }
            });
           
        }
    ));
