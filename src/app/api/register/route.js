import User from "@/models/User";
import connect from "@/utils/db";
import {NextResponse} from 'next/server'
import bcrypt from 'bcryptjs'

export const POST=async(request)=>{
    const {name, email, password}=await request.json();
    console.log(name, email, password);
    await connect();
    const hashPassword=await bcrypt.hash(password, 8)
    const newUser=new User({name, email, password:hashPassword});
    try {
        await newUser.save();
        return new NextResponse(JSON.stringify({msg:"User has been created"}), {status:201});
    } catch (error) {
        throw new Error(error);
        
    }

}