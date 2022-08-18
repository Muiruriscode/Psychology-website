import React, { useState } from 'react'
import { addUserDetails } from '../features/user/user'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import server from '../config'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toast'
import Router from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { username } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const sendLoginDetails = async () => {
    try {
      const { data } = await axios.post(`${server}/api/v1/auth/login`, {
        password,
        email,
      })
      toast.success(data.msg)
      if (data) {
        dispatch(
          addUserDetails({
            email: data.email,
            username: data.username,
            isAdmin: data.isAdmin,
            id: data.id,
            token: data.token,
          })
        )
      }
      Router.push('/')
    } catch (error) {
      toast.error('Incorrect email or password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendLoginDetails()
  }
  return (
    <>
      <section className='w-full md:shadow-xl md:border-2 border-gray-100 md:w-1/3'>
        <h1 className='font-semibold font-mono text-2xl text-center mb-2 mt-5'>
          Login
        </h1>
        <form onSubmit={handleSubmit} className='w-full px-5 py-2 bg-white '>
          <ToastContainer />
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-1'>
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
          <div className='mb-5'>
            <label htmlFor='password' className='block mb-1'>
              Password:
            </label>
            <input
              type='password'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='text-center text-lg font-semibold bg-blue-400 rounded-sm w-full p-1 hover:bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
          >
            Login
          </button>
          <div className='text-blue-700 mt-5 hover:text-blue-500 flex justify-between '>
            <div>
              <Link href='/register'>Create an account</Link>
            </div>
            <div>
              <Link href='/forgot'>Forgot Password?</Link>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
