import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className='bg-main shadow-md top-0 z-20'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
            <div className='col-span-1 '>
                <Link to="/">
                    <img src='/images/logo.jpg' alt='logo' className=' text-white w-32 h-12 objet-contain' />
                </Link>
            </div>
        </div>
    </div>   
    </>
  )
}

export default NavBar