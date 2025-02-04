import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup.jsx'
import Home from '../Home/home.jsx'
function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-white dark:text-black">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     
    </form>
    <h3 className="font-bold text-lg">Login</h3>
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
        <button className='bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Login</button>
        <p>Not registered? <Link to = '/signup' className='underline text-blue-500 cursor-pointer'>signup</Link></p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
