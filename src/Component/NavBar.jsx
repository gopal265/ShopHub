import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [focus,setFocus] = useState("home")
    const navigate = useNavigate();

    if(window.location.pathname === "/" && focus !== "home"){
        setFocus("home")
    }
    else if(window.location.pathname=='/shop' && focus !== "shop"){
        setFocus("shop")
    }
    else if(window.location.pathname=='/blog' && focus !== "blog"){
        setFocus("blog")
    }
    else if(window.location.pathname=='/contact' && focus !== "contact"){
        setFocus("contact")
    }
    else if(window.location.pathname=='/login' && focus !== "login"){
        setFocus("login")
    }
    else if(window.location.pathname=='/signup' && focus !== "signup"){
        setFocus("signup")
    }
    return (
        <div className='grid grid-cols-12 p-[10px] h-[80px] border-white border-[1px]'>
            <div className='flex justify-center items-center h-full'>
            <div className='w-[40px] h-[40px] rounded-full bg-white  flex justify-center items-center ' onClick={()=>navigate("/")}>
                <div className='gap-1 '>
                    <div className='flex gap-1'>
                        <div className='text-[4px]' >■</div>
                        <div className='text-[4px]'>■</div>
                    </div>
                    <div className='flex gap-1'>
                        <div className='text-[4px]'>■</div>
                        <div className='text-[4px]'>■</div>
                    </div>
                </div>
            </div>
            </div>
            <div className='inline text-[21px]  font-bold flex justify-center items-center h-full'>    
                <div>shopHub</div>
            </div>
            <div className='col-span-2'>

            </div>
            <div className='col-span-7  text-[18px] font-bold  gap-5 flex '>
              
                <div className='text-center flex  justify-center items-center h-full' onClick={()=>navigate("/")} >
                   Home
                </div>
                <div className='text-center flex  justify-center items-center h-full' onClick={()=>navigate("/shop")}>
                   Shop
                </div>
                <div className='text-center flex  justify-center items-center h-full' onClick={() => navigate("/blog")}>
                    Blog
                </div>
                <div className='text-center flex shrink justify-center items-center h-full'>
                    Contact
                </div>
                <div className='text-center flex  justify-center items-center h-full' onClick={() => navigate("/login")}>
                    Login
                </div>
                <div className='text-center flex  justify-center items-center h-full' onClick={() => navigate("/signup")}>
                    SignUp
                </div>
                <div className='text-center flex justify-center items-center h-full' onClick={() => navigate("/account")}>
                    My Account
                </div>
            </div>
            <div className='h-full flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                <div className='w-[40px] h-[40px] rounded-full bg-color2 flex justify-center items-center '>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" width= {14}className="svg-inline--fa fa-shopping-bag fa-w-12  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
