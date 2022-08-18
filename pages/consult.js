import React from 'react'
import { Consult, Header, Layout, Logo, Meta } from '../components'

const advice = () => {
  return (
    <section className='w-screen h-screen'>
      <Meta
        title='Consult Morrin Macharia'
        description='Consult the best psychologist Morrin Macharia on issuues such as anxiety, depressiosion and trauma'
      />
      <Layout />
      <Logo />
      <div className='md:px-5'>
        <Header title='consultation' />
        <Consult />
      </div>
    </section>
  )
}

export default advice
