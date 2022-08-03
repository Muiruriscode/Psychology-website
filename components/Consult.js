import React, { useState } from 'react'
import { Input } from '../components'
import axios from 'axios'

const Consult = () => {
  const [index, setIndex] = useState(0)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${server}/api/v1/consults/`)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  if (index === 0) {
    return (
      <div>
        <div className='flex items-center flex-col mt-5'>
          <div className='flex flex-col mt-2 p-5 border-2 border-blue-300 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold my-2'>
              What led you to consider my services
            </h2>
            <form>
              <label htmlFor='one '>
                <input
                  type='checkbox'
                  name='one'
                  id='one'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>
                  Feeling overwhelmed and anxious
                </span>
              </label>
              <label htmlFor='two'>
                <input
                  type='checkbox'
                  name='two'
                  id='two'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>Depression</span>
              </label>
              <label htmlFor='three'>
                <input
                  type='checkbox'
                  name='three'
                  id='three'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>
                  Problems with school/job performance
                </span>
              </label>
              <label htmlFor='four'>
                <input
                  type='checkbox'
                  name='four'
                  id='four'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>Grief</span>
              </label>
              <label htmlFor='five'>
                <input
                  type='checkbox'
                  name='five'
                  id='five'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>Trauma</span>
              </label>
              <label htmlFor='six'>
                <input
                  type='checkbox'
                  name='six'
                  id='six'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>Self Confidence</span>
              </label>
              <label htmlFor='seven'>
                <input
                  type='checkbox'
                  name='seven'
                  id='seven'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>Need to improve my life</span>
              </label>
              <label htmlFor='eight'>
                <input
                  type='checkbox'
                  name='seven'
                  id='seven'
                  className='p-3 cursor-pointer'
                />
                <span className='ml-3 text-xl'>
                  I need help with a specific challenge
                </span>
              </label>
              <button
                className='bg-blue-400 rounded-full py-2 px-7 text-xl  cursor-pointer place-self-end mt-2 font-semibold hover:bg-blue-500'
                onClick={() => setIndex(index + 1)}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className=' flex justify-center mt-20 '>
        <div className='flex flex-col gap-2 w-3/4 md:w-1/3 mt-2 p-2 border border-blue-300 shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>Gender</h2>
          <button
            className='block bg-blue-200 font-semibold text-lg rounded-sm hover:bg-blue-300'
            onClick={() => setIndex(index + 1)}
          >
            Male
          </button>
          <button
            className='block bg-blue-200 font-semibold text-lg rounded-sm hover:bg-blue-300'
            onClick={() => setIndex(index + 1)}
          >
            Female
          </button>
          <div className='flex justify-between'>
            <button
              className='bg-blue-400 rounded-full py-1 px-5 text-lg  cursor-pointer place-self-end mt-2 font-semibold hover:bg-blue-500'
              onClick={() => setIndex(index > 0 && index - 1)}
            >
              Prev
            </button>
            <button
              className='bg-blue-400 rounded-full py-1 px-5 text-lg  cursor-pointer place-self-end mt-2 font-semibold hover:bg-blue-500'
              onClick={() => setIndex(index + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className='flex justify-center mt-20'>
        <div className='flex flex-col gap-5 p-5 border border-blue-300 shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>
            Schedule consultation
          </h2>
          <form>
            <label htmlFor='consult'>
              <span className='text-lg font-semibold'>Pick a date</span>
              <Input
                type='date'
                name='consult'
                id='consult'
                placeholderText='Date and time'
              />
            </label>
            <div className='flex justify-between'>
              <button
                className='bg-blue-400 rounded-full py-1 px-5 text-lg  cursor-pointer place-self-end mt-2 font-semibold hover:bg-blue-500'
                onClick={() => setIndex(index > 0 && index - 1)}
              >
                Prev
              </button>
              <button
                className='bg-blue-400 rounded-full py-1 px-5 text-lg  cursor-pointer place-self-end mt-2 font-semibold hover:bg-blue-500'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Consult
