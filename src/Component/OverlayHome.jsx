import React from 'react'

const OverlayHome = () => {
    console.log(screen.width)
    return (
        <div className='flex justify-around items-center grid grid-cols-2 sm:grid-cols-3  g w-full px-12'>
            {
                screen.width > 640 && <div>
                <span className='text-white'>Home</span>/Product Details
            </div>
            }
            
            <div className='flex justify-center items-center font-semibold text-[1.5rem]'>
                Shop
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='text-[1rem]'>Showing 1-4 of 20 results</p>
                <select>
                    <option>Default Sorting</option>
                    <option>Latest</option>
                    <option>Ascending</option>
                    <option>Descending</option>

                </select>
            </div>
        </div>
    )
}

export default OverlayHome
