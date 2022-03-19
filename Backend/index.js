import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cvsRouter from "./routes/cvs_route";

import session from "express-session";
import cors from "cors";
import authRouter from "./routes/auth_router";
import passport from "passport";
import * as passportConfig from "./strategies/local";
 
const app = express();
app.use(session({
    secret: 'imen',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 }
  }))
app.use(passport.initialize());


app.use(passport.session());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cors());
app.get('/',(req, res)=> {
    res.send('Running')
})
app.use('/cv', cvsRouter);
app.use('/auth', authRouter);


const mongoUrl = "mongodb+srv://imen:imenMongoAtlas@cluster0.2ncad.mongodb.net/joby?retryWrites=true&w=majority";
mongoose.connect(mongoUrl).then(() => {
    console.log("DB connected 🐤");
    app.listen(8080, () => {
        console.log("Server runing on port 8080 🐱");
    })
}).catch((error) => console.log("Error : " + error))