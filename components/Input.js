import React from 'react'

const Input = ({ type, placeholderText }) => {
  return (
    <input
      type={type}
      className='w-full p-1 border border-gray-300 rounded-sm'
      placeholder={placeholderText}
    />
  )
}

export default Input
