import React from 'react'
import OverlayShop from './OverlayShop'
import OverlayHome from './OverlayHome'

const Overlay = () => {
    console.log(window.location.pathname)
    return (
        <div className='bg-color3 h-[19rem] rounded-[3rem]'>
            <div className='flex justify-around items-center py-[4rem] '>
                {window.location.pathname === "/shop" && <OverlayShop />
                }
                {window.location.pathname === "/" && <OverlayHome />
                }
            </div>
        </div>
    )
}

export default Overlay
