import { useState, useRef, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Review, Header } from './'
import axios from 'axios'
import server from '../config'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toast'

const Reviews = ({ reviewData }) => {
  const [index, setIndex] = useState(1)
  const [info, setInfo] = useState('')
  const reviewRef = useRef()
  const { id, token, username } = useSelector((state) => state.user)
  let length = reviewData.length - 1

  useEffect(() => {
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

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/reviews/${id}`,
        {
          author: username,
          body: info,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      toast.success(data.msg)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      if (error.response.data?.msg) {
      } else {
        toast.error(error.message)
      }
    }
  }

  return (
    <div className='w-full overflow-hidden'>
      <div className='md:px-5'>
        <Header title='Reviews' />
      </div>
      <div className='flex w-screen mt-4'>
        <div className='bg-blue-200 w-full relative'>
          <h1 className='text-4xl text-center font-bold my-4'>
            My latest reviews
          </h1>
          <button
            name='leftBtn'
            type='button'
            className='absolute h-full w-10 top-0 left-0 cursor-pointer z-20  text-lg bg-transparent md:bg-white pl-1'
            onClick={handleClick}
          >
            <AiOutlineLeft />
          </button>
          <button
            name='rightBtn'
            type='button'
            className='absolute h-full w-10 bg-transparent md:bg-white top-0 right-0  cursor-pointer z-20 text-xl px-2 '
            onClick={handleClick}
          >
            <AiOutlineRight />
          </button>
          <div
            className='flex items-start transition-all duration-1000 ease-in-out mx-w-full'
            ref={reviewRef}
          >
            {reviewData.map((review) => (
              <Review
                key={review._id}
                text={review.body}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </div>
      {username && (
        <section className='mt-5 pb-5 px-5 md:px-10'>
          <ToastContainer />
          <hr />
          <h2 className='mb-3 font-semibold text-2xl'>Leave a review</h2>
          <textarea
            name='comment'
            id='comment'
            cols='40'
            rows='7'
            className='block border border-gray-500 rounded-sm p-1 w-full'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          <div className='flex mt-2'>
            <button
              className='transition-all duration-200 ease bg-blue-500 flex justify-center items-center cursor-pointer flex-none hover:bg-blue-600 text-white text-lg w-50 py-2 px-5 rounded-full ring ring-blue-400 hover:ring-blue-500 font-semibold'
              onClick={handleSubmit}
            >
              Send Review
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default Reviews
