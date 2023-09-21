"use client"
import React, {useState} from 'react'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'

const page = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const router=useRouter();

  const loginHandler=async(e)=>{
    e.preventDefault();
    const res=await fetch("/api/login", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email, password})
    });

    const data=await res.json();
    if(data){
      router.push('/secret')
    }
    console.log(data);
    if(data) alert("User Login Sucessfully");
    else alert("Invalid User!")
    

  }
  return (
    <div>

      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
          <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your password' />
          <button onClick={loginHandler}>Login</button>

        </form>

      </div>

    </div>
  )
}

export default page