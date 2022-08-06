import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <h1 className='px-5 text-2xl md:text-3xl mt-2 font-bold md:mt-2'>
        {title}
      </h1>
      <hr />
    </header>
  )
}

export default Header
