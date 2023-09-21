"use client"
import React, {useState} from 'react'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'


export default function Register() {

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const router=useRouter();

  const registerApi=async(e)=>{
    e.preventDefault();
    const res=await fetch("/api/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name, email, password})
    })
    const data=await res.json();
    if(data){
      router.push('/login')
    }
   console.log(data);
  }
  return (
    <div>
      
      <div className={styles.register}>
        <h1>Register</h1>
        <form>
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Name"/>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your email"/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your password"/>
          <button onClick={registerApi}>Register</button>
        </form>
      </div>
    </div>
  )
}
