import React from 'react'
import Label from './Label'
import Input from './Input'

const ContactForm = () => {
  const handleClick = () => {}
  return (
    <form className=' p-5 '>
      <h2 className='font-semibold text-lg text-center'>Drop Me a line</h2>
      <p className='text-center mt-1'>Im Here for you. How can I help?</p>
      <div className='mb-2'>
        <Label name='Name:' />
        <Input type='text' />
      </div>
      <div className='mb-2'>
        <Label name='Email:' />
        <Input type='email' />
      </div>
      <div className='mb-2'>
        <Label name='Comment:' />
        <textarea
          name='comment'
          id='comment'
          cols='50'
          rows='8'
          className='block border border-gray-300 rounded-sm p-1 w-full'
        ></textarea>
      </div>
      <button
        type='button'
        className='transition-all duration-500 ease-in-out text-center text-lg font-semibold bg-blue-500 rounded-sm w-full p-1 hover:bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
        onClick={handleClick}
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm
