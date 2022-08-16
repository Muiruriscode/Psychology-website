import React, { useState } from 'react'
import Label from './Label'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toast'
import axios from 'axios'
import server from '../config'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [useremail, setUseremail] = useState('')
  const [comment, setComment] = useState('')

  const handleClick = async () => {
    try {
      const { data } = await axios.post(`${server}/api/v1/comments/`, {
        email: useremail,
        author: name,
        comment,
      })
      toast.success(data.msg)
    } catch (error) {
      console.log(error)
      if(error.response.data.msg){
        toast.error(error.response.data.msg)
      }else{
        toast.error(error.message)
      }
    }
  }
  return (
    <form className=' p-5 w-full'>
      <ToastContainer />
      <h2 className='font-semibold text-lg text-center'>Drop Me a line</h2>
      <p className='text-center mt-1'>Im Here for you. How can I help?</p>
      <div className='mb-2'>
        <Label name='Name:' />
        <input
          type='name'
          className='w-full p-1 border border-gray-300 rounded-sm'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <Label name='Email:' />
        <input
          type='email'
          className='w-full p-1 border border-gray-300 rounded-sm'
          placeholder='email'
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <Label name='Comment:' />
        <textarea
          name='comment'
          id='comment'
          cols='50'
          rows='8'
          className='block border border-gray-300 rounded-sm p-1 w-full'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
