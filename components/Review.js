import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Review = ({ text, author }) => {
  return (
    <div className='w-full flex-none'>
      <p className='px-10 md:px-20 z-0'>
        <span className='inline-block'>
          <FaQuoteLeft />
        </span>
        <span>{text}</span>
      </p>
      <p className='px-10 mt-5 md:px-20 mb-10'>
        <span className='font-bold'>Author: </span> {author}
      </p>
    </div>
  )
}

export default Review
