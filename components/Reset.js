import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import server from '../config'

const Reset = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const router = useRouter()
  const { token, email } = router.query

  const handleClick = async () => {
    try {
      if (password === confirm) {
        const { data } = await axios.post(
          `${server}/api/v1/auth/reset-password/`,
          { password, token, email }
        )
        console.log(data)
      } else {
        console.log('passwords do not match')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className='w-full md:shadow-xl md:border-2 border-gray-100 md:w-1/3'>
        <h1 className='font-semibold font-mono text-2xl text-center mb-2 mt-2'>
          Reset Password
        </h1>
        <form className='w-full px-5 py-2 bg-white '>
          <div className='mb-2'>
            <label htmlFor='name' className='block mb-1 font-mono'>
              Password:
            </label>
            <input
              type='password'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='Strong password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='name' className='block mb-1 mt-2 font-mono'>
              Confirm Password:
            </label>
            <input
              type='password'
              className='w-full p-1 border border-gray-400 rounded-sm'
              placeholder='Confirm password'
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button
            type='button'
            className='text-center text-lg bg-blue-400 rounded-sm w-full p-1 font-mono hover:bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
            onClick={handleClick}
          >
            Update password
          </button>
        </form>
      </section>
    </>
  )
}

export default Reset
