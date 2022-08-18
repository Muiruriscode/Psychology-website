import React from 'react'

import { Login, Meta } from '../components'

const login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Meta title='Login Talkspace Kenya' />
      <Login />
    </div>
  )
}

export default login
