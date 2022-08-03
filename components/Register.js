import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import server from '../config'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirm, setConfirm] = useState('')

  const sendRegisterDetails = async () => {
    try {
      const { data } = await axios.post(`${server}/api/v1/auth/register`, {
        username,
        email,
        password,
        confirm,
      })
      if (data) {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRegisterDetails()
  }

  return (
    <>
      <section className='w-full md:shadow-xl md:border-2 border-gray-100 md:w-1/3'>
        <h1 className='font-semibold font-mono text-2xl text-center mb-2 mt-5'>
          Register
        </h1>
        <form
          action=''
          className='w-full px-5 py-2 bg-white '
          onSubmit={handleSubmit}
        >
          <div className='mb-5'>
            <label htmlFor='name' className='block font-semibold'>
              Username:
            </label>
            <input
              type='text'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='name' className='block font-semibold'>
              Email:
            </label>
            <input
              type='email'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='password' className='block font-semibold'>
              Password:
            </label>
            <input
              type='password'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='password' className='block font-semibold'>
              Confirm password:
            </label>
            <input
              type='password'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='confirm password'
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='text-center text-lg font-semibold bg-blue-300 rounded-sm w-full p-1'
          >
            Register
          </button>
          <div className='text-blue-700 mt-2 hover:text-blue-500'>
            <Link href='/login'>Already have a account?</Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
