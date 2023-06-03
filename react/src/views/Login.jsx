import React from 'react'

export const Login = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div>
          <h1 className='text-lg font-bold text-center mb-4'>Login</h1>
          {/*Login Form */}
          <div className='border p-4 shadow-xl rounded'>
            <form className='p-4 gap-2 flex flex-col' action="">
              <div className='flex flex-col'>
                <label htmlFor="Email">Email</label>
                <input className='w-full border border-black p-1.5 focus:outline-none focus:border-sky-300 rounded' name='Email' type="text" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="Password">Password</label>
                <input className='w-full border border-black p-1.5 focus:outline-none focus:border-sky-300 rounded' name='Password' type="password" />
              </div>
              <button className='bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded my-2'>Login</button>
              <p>Don't have an account? Register <a href='' className='text-sky-400 hover:text-sky-300'>here</a></p>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
