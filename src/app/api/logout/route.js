import {NextResponse} from 'next/server';
import {serialize} from 'cookie';

export async function GET(){
    const serialized=serialize("cookie_name", "", {
        httpOnly:true
    })

    return new NextResponse (JSON.stringify({message:"Logout Sucessfully"}), {status:201, headers:{"Set-Cookie":serialized}})
}