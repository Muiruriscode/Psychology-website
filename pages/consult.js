import React from 'react'
import { Consult, Header, Layout } from '../components'

const advice = () => {
  return (
    <section className='w-screen h-screen'>
      <Layout />
      <div className='md:px-5'>
        <Header title='consultation' />
        <Consult />
      </div>
    </section>
  )
}

export default advice
