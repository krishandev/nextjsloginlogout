import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import {serialize} from 'cookie';
import {sign} from 'jsonwebtoken'


export async function POST(request){

    const {email, password}=await request.json();
    console.log(email, password);
    await connect();
    const user=await User.findOne({email:email});
    if(user){
        const isPassword=await bcrypt.compare(password, user.password);
        if(isPassword){
            const token=sign({_id:user._id}, "uhdtrdansbdtrewsopiynvcxzas");
            const serialized=serialize("cookie_name", token, {
                httpOnly:true
            })
            return new NextResponse(JSON.stringify(user), {
                status:201,
                headers:{"Set-Cookie":serialized}
            })
        }
        else{
            throw new Error("Wrong Email or Password!");
        }

    }
    else{
        throw new Error("User Does not Exists!")
    }

}