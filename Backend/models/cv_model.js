import mongoose from "mongoose";
const cvSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    cvLink: String,
    lm: String,
/////huyrtrtr

});
const cvModel = mongoose.model("cvModel", cvSchema);
export default cvModel;