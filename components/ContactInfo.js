import React from 'react'

const ContactInfo = ({ icon, info }) => {
  return (
    <p className='my-2 flex items-center'>
      <span className=' mr-2 text-lg text-blue-700'>{icon}</span>{' '}
      <span className='font-semibold'>{info}</span>
    </p>
  )
}

export default ContactInfo
