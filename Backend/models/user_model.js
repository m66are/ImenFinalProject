import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username: String,
   
    email: String,
    password: String,
   


});
const userModel = mongoose.model("userModel", userSchema, 'users');
export default userModel;