import React from 'react'

const Label = ({ name }) => {
  return (
    <label
      htmlFor='name'
      className='inline-block ml-5 px-2 translate-y-3 z-2 bg-white '
    >
      {name}
    </label>
  )
}

export default Label
