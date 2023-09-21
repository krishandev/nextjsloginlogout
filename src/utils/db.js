import mongoose from "mongoose";

const connect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nextjsuserlog')
    } catch (error) {
        throw new error("Connection failed", error);
    }
}

export default connect;