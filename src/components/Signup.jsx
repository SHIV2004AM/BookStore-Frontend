import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
   <>
   <div className=" dark:bg-white dark:text-black flex h-screen items-center justify-center border-2px shadow-md">
   <div className='w-[600px] dark:bg-white dark:text-black' >
  <div className="modal-box dark:bg-white dark:text-black">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      <Link to = '/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input className='dark:bg-white dark:text-black py-1 w-80 px-3 border rounded-md outline-none' type="Name" placeholder='enter your FullName'/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input className='dark:bg-white dark:text-black py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder='enter your email'/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input className='dark:bg-white dark:text-black py-1 w-80 px-3 border rounded-md outline-none' type="password" placeholder='enter your password'/>
    </div>
    <div className='flex justify-around mt-4 '>
        <button className='bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Signup</button>
        <p>Have account? <button onClick={()=> document.getElementById("my_modal_3").showModal()} className='underline text-blue-500 cursor-pointer'>Login</button>
        <Login/> </p>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Signup
