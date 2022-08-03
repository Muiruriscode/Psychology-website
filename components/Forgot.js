import React from 'react'
import { useState } from 'react'
import server from '../config'
import axios from 'axios'

const Forgot = () => {
  const [email, setEmail] = useState('')
  console.log(server)
  const handleClick = async (e) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/auth/forgot-password/`,
        { email }
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className='w-full md:shadow-xl md:border-2 md:border-gray-100 md:w-1/3'>
        <h1 className='font-semibold font-mono text-2xl text-center mb-2 mt-2'>
          Forgot Password
        </h1>
        <form className='w-full px-5 py-2 bg-white '>
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 font-mono'>
              Email:
            </label>
            <input
              type='email'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type='button'
            className='text-center text-lg bg-blue-400 rounded-sm w-full p-1 font-mono hover:bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
            onClick={handleClick}
          >
            Get reset link
          </button>
        </form>
      </section>
    </>
  )
}

export default Forgot
