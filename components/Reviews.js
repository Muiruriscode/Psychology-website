import { useState, useRef, useEffect } from 'react'
import { reviewData } from '../data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Review } from './'

const Reviews = () => {
  const [index, setIndex] = useState(1)
  const reviewRef = useRef()
  let length = reviewData.length - 1

  useEffect(() => {
    console.log('translating')
    console.log('index', index)

    let slider = setInterval(() => {
      reviewRef.current.style.transform = `translateX(-${index * 100}vw)`
    }, 0)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  const handleClick = (e) => {
    if (e.target.name === 'leftBtn') {
      setIndex(index > 0 ? index - 1 : length)
      index > 0 ? index - 1 : length
    } else {
      setIndex(index < length ? index + 1 : 0)
    }
  }

  return (
    <div className='w-screen overflow-hidden'>
      <div className='flex h-screen w-screen items-center'>
        <div className='bg-gray-200 w-screen relative'>
          <h1 className='text-4xl text-center font-bold my-4'>
            My latest reviews
          </h1>
          <button
            name='leftBtn'
            type='button'
            className='absolute h-full w-10 top-0 left-3 cursor-pointer z-20 bg-transparent text-lg'
            onClick={handleClick}
          >
            <AiOutlineLeft />
          </button>
          <button
            name='rightBtn'
            type='button'
            className='absolute h-full w-10 bg-transparent top-0 right-0  cursor-pointer z-20 text-lg '
            onClick={handleClick}
          >
            <AiOutlineRight />
          </button>
          <div
            className='flex items-start transition-all duration-1000 ease-in-out'
            ref={reviewRef}
          >
            {reviewData.map((review) => (
              <Review
                key={review.id}
                text={review.text}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
