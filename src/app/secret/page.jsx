"use client"
import React,{useEffect, useContext} from 'react';
import {UserContext} from '@/context/Usercontext'
import {useRouter} from 'next/navigation'

const page = () => {
  const router=useRouter();
  const {user}=useContext(UserContext);

  useEffect(()=>{
   if(!user){
    router.push("/login")
   }
  }, [])
  return (
    <div>Secret Page</div>
  )
}

export default page