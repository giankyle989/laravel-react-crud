import React from 'react'

const Index = () => {
  return (
    <>
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2>Welcome to our website!</h2>
            <div className='flex gap-x-4 p-4'>
                <button className='bg-sky-400 p-2 text-white rounded-md hover:bg-sky-600 active:bg-sky-800'>Login</button>
                <button className='border-2 border-sky-400 p-2 rounded-md hover:bg-slate-200 active:bg-slate-400'>Signup</button>
            </div>
        </div>
    </>
  )
}

export default Index