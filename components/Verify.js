import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { server } from '../config'

const Verify = () => {
  // const [email, setEmail] = useState('')
  // const [verificationToken, setVerificationToken] = useState('')
  const router = useRouter()
  // console.log(router.query)
  // setEmail(token)
  // setVerificationToken(myEmail)

  const { token, email } = router.query
  useEffect(() => {
    console.log('email', email)
    console.log('token', token)
    const verifyEmailAdress = async () => {
      try {
        if (email && token) {
          const { data } = await axios.post(
            `http://localhost:5000/api/v1/auth/verify-email`,
            {
              verificationToken: token,
              email,
            }
          )
          console.log(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    verifyEmailAdress()
  }, [email, token])

  return (
    <section className='flex items-center'>
      <h1 className='text-lg '>Your email has been verified</h1>
      <Link href='/login'>
        <p
          type='button'
          className='pl-1 text-blue-600 hover:text-blue-500 underline cursor-pointer'
        >
          Go to Login page
        </p>
      </Link>
    </section>
  )
}

export default Verify
