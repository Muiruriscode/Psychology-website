import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai'

import {
  ContactInfo,
  Header,
  Input,
  Label,
  Layout,
  Social,
} from '../components'

const contact = () => {
  return (
    <div className='px-5'>
      <Layout />
      <Header title='Contact Me' />

      <div className='block md:flex md: items-start md:gap-10 mt-5'>
        <div className='shadow-lg border border-gray-100 md:w-3/4'>
          <form action='' className=' p-5 '>
            <h2 className='font-semibold text-lg text-center'>
              Drop Me a line
            </h2>
            <p className='text-center mt-1'>Im Here for you. How can I help?</p>
            <div className='mb-2'>
              <Label name='Name:' />
              <Input type='text' />
            </div>
            <div className='mb-2'>
              <Label name='Email:' />
              <Input type='email' />
            </div>
            <div className='mb-2'>
              <Label name='Comment:' />
              <textarea
                name='comment'
                id='comment'
                cols='50'
                rows='8'
                className='block border border-gray-300 rounded-sm p-1 w-full'
              ></textarea>
            </div>
            <button
              type='button'
              className='transition-all duration-500 ease-in-out text-center text-lg font-semibold bg-blue-500 rounded-sm w-full p-1 hover:bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
            >
              Send
            </button>
          </form>
        </div>
        <div className='sm:mt-5 block w-full md:flex justify-center'>
          <div>
            <h2 className='font-semibold text-xl text-blue-500'>My contact</h2>
            <hr />
            <ContactInfo icon={<AiFillPhone />} info='0700 000 000' />
            <ContactInfo icon={<AiFillMail />} info='email@gmail.com' />
            <div>
              <h2 className='font-semibold text-xl text-blue-500'>
                Social links
              </h2>
              <hr />
            </div>
            <div className='flex justify-between items-start'>
              <Social
                link='#'
                icon={
                  <AiFillFacebook
                    className={`transition-all duration-500 ease-in-out transform hover:scale-125 text-2xl hover:text-blue-500 `}
                  />
                }
              />
              <Social
                link='#'
                icon={
                  <AiFillLinkedin
                    className={`transition-all duration-500 ease-in-out transform hover:scale-125 text-2xl hover:text-blue-500 `}
                  />
                }
              />
              <Social
                link='#'
                icon={
                  <AiFillTwitterCircle
                    className={`transition-all duration-500 ease-in-out transform hover:scale-125 text-2xl hover:text-blue-400`}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
