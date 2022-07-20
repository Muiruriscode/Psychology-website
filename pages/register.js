import React from 'react'

const register = () => {
  return (
    <div className='bg-blue-100 md:bg-transparent h-screen flex justify-center items-center'>
      <form action='' className='w-full md:w-1/3 bg-blue-100 p-5 shadow-md'>
        <h1 className='font-bold text-2xl text-center mb-5'>Register</h1>
        <div className='mb-5'>
          <label htmlFor='name' className='block font-semibold'>
            Username:
          </label>
          <input type='text' className='w-full p-1' placeholder='username' />
        </div>
        <div className='mb-5'>
          <label htmlFor='name' className='block font-semibold'>
            Email:
          </label>
          <input type='email' className='w-full p-1 ' placeholder='email' />
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='block font-semibold'>
            Password:
          </label>
          <input
            type='password'
            className='w-full p-1 '
            placeholder='password'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='block font-semibold'>
            Confirm password:
          </label>
          <input
            type='password'
            className='w-full p-1 '
            placeholder='confirm password'
          />
        </div>
        <button
          type='submit'
          className='text-center text-lg font-semibold bg-blue-300 rounded-sm w-full p-1'
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default register
