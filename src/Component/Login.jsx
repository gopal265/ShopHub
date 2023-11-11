import React, { useState,useEffect } from 'react'
import { login } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_ERROR } from '../constants/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [showPassword,setShowPassword] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(localStorage.getItem("email")+ " " +localStorage.getItem("password"))

    const handlePassword = () =>{
        setShowPassword(!showPassword)
    }
    const handleSubmit = () =>{
        
        if(email.trim() === ""){
            alert("Email is required")
            return
        }
        if(email.trim() !== "" && !email.includes("@")){
            alert("Invalid Email")
            return
        }
        if(password.trim() === ""){
            alert("Password is required")
            return
        }
      
        dispatch(login({email:email,password:password}))
        if(localStorage.getItem("email") == email && localStorage.getItem("password") == password){
            alert("You are successfully login")
            dispatch({type:CLEAR_ERROR})
            navigate("/")
        }
        else{
            alert("invalid credentials")
            navigate("/signup")

        }
        
        


        
    }

    

    
  return (
    <div className='w-screen  flex justify-center items-center pt-[3rem]'>
    <div className='flex flex-col justify-center w-[300px] items-center bg-card bg-size1 rounded-[2rem]  bg-color4 m-[0.5rem] shadow-shadow1 px-[20px] py-[30px]'>
      <h1 className='text-[27px] pb-3 font-semibold'>Login</h1>
      <label className="pb-2">Email</label>
      <input type='text' className="pl-3 w-full outline-none focus:shadow-shadow3 rounded-xl flex p h-[2.5rem] mb-2"  placeholder='abc@example.com'  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label className="pb-2">Password</label>
      <div className='relative w-full pb-3'>
      <input type={`${showPassword ? "text" : "password"}`} className="mb-2 pl-2 w-full focus:shadow-shadow3 outline-none rounded-xl h-[2.5rem]"  value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div className='absolute right-[10px] top-[10px]' onClick={handlePassword}>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-slash" class="svg-inline--fa fa-eye-slash fa-w-20 icon" width={22} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg>
      </div>
      </div>
      <div>
        <button className='bg-gray-700 opacity-50 rounded-3xl w-[13rem] h-[3rem] text-color3' onClick={handleSubmit}> Login</button>
      </div>
    </div>
    </div>
  )
}

export default Login
