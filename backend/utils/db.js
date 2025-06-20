import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://singhvishal032000:abc12345@cluster0.rgxjf2x.mongodb.net/");
            console.log("mongoDB is connected successfully...");
        } catch (error ) {
        console.log(error);
       }
}
export default connectDB;