import React from 'react'

const Messages = ({ text, other }) => {
  return (
    <div
      className={`bg-blue-400 p-2 my-2 rounded-lg w-10/12 md:w-5/12 relative ${
        other && 'bg-gray-300 place-self-end'
      }`}
    >
      <p>{text}</p>
    </div>
  )
}

export default Messages
