import React from 'react'
import Link from 'next/link'

const LinkItem = ({ links, name }) => {
  return (
    <Link href={links}>
      <span className='transition-all duration-500 ease-in-out pl-1 sm:hover:-translate-x-1 hover:text-blue-300 ease-in-out mx-2 cursor-pointer  hover:bg-blue-600 md:hover:bg-transparent md:hover:text-gray-500'>
        {name}
      </span>
    </Link>
  )
}

export default LinkItem
