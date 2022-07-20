import React from 'react'

const Button = ({ text }) => {
  return (
    <button className=' bg-orange-400 ring-2 ring-red-300 rounded-md p-3 border-white font-bold cursor-pointer mx-2 hover:bg-orange-500 transition-al duration-500 ease-in-out '>
      {text}
    </button>
  )
}

export default Button
