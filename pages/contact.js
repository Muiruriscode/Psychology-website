import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai'

import {
  ContactForm,
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
      <ContactForm />
      <div className='block md:flex md: items-start md:gap-10 mt-5'>
        <div className='shadow-lg border border-gray-100 md:w-3/4'></div>
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
