import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <h1 className='text-3xl  font-bold mt-2'>{title}</h1>
      <hr />
    </header>
  )
}

export default Header
