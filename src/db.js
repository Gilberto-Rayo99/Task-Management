import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://jgrayo999:oLfjcAoKgKZjP9Ou@cluster0.mbbasoq.mongodb.net/");

        console.log("DB is connected ==>");
    } catch (error) {
        console.log(error);
    }
};