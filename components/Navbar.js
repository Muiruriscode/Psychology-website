import React, { useState } from 'react'
import Link from 'next/link'
import LinkItem from './LinkItem'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [visibility, setVisibility] = useState(false)

  return (
    <nav>
      <button
        className='absolute md:hidden right-5 top-5 z-20 text-lg text-black hover:text-gray-500 cursor-pointer font-bold'
        onClick={() => setVisibility(!visibility)}
      >
        <AiOutlineMenu />
      </button>
      <div className='hidden md:bg-white pr-5 w-screen top-0 left-0 md:flex md:justify-between py-1 items-center z-10 pl-5 md:text-black'>
        <div className='pl-5 text-xl text-orange-400 font-bold hidden md:inline'>
          Talk<span className='text-blue-500'>Space</span>
        </div>
        <div className='flex flex-col md:flex-row md:items-center'>
          <LinkItem links='/' name='Home' />
          <LinkItem links='/about' name='About' />
          <LinkItem links='/consult' name='Consult' />
          <LinkItem links='/chat' name='Chat' />
          <LinkItem links='/reviews' name='Reviews' />
          <LinkItem links='/contact' name='Contact' />

          <button className='hidden md:inline-block backdrop:transition-all ml-0 duration-500  md:bg-transparent ease-in-out md:outline md:ml-2 transform hover:scale-110 md:mx-5 md:px-3 md:py-1 cursor-pointer md:rounded-lg font-semibold'>
            <Link href='/login'>Login</Link>
          </button>

          <button className='hidden md:inline-block transition-all duration-1000 ease-in-out md:bg-orange-300 md:hover:bg-orange-400 transform p-1 md:my-2 hover:scale-110 md:ml-2 md:mr-5 md:px-3 md:py-2 cursor-pointer md:rounded-lg color-white font-semibold '>
            <Link href='/register'>Get Started</Link>
          </button>
        </div>
      </div>
      {visibility && (
        <div className='fixed bg-blue-500 pr-5 w-screen top-0 left-0 py-2 items-center z-10 pl-5 md:hidden'>
          <div className='pl-5 text-xl font-bold hidden md:inline'>
            Talk<span className='text-blue-500'>Space</span>
          </div>
          <div className='flex flex-col'>
            <LinkItem links='/' name='Home' />
            <LinkItem links='/about' name='About' />
            <LinkItem links='/consult' name='Consult' />
            <LinkItem links='/chat' name='Chat' />
            <LinkItem links='/reviews' name='Reviews' />
            <LinkItem links='/contact' name='Contact' />

            <div className='flex justify-between items-center px-2'>
              <button className='transition-all duration-1000 ease-in-out border-2 border-blue-400 transform hover:scale-90 hover:opacity-50 px-2 cursor-pointer rounded-md shadow-lg font-semibold py-1 '>
                <Link href='/login'>Login</Link>
              </button>

              <button className='transition-all duration-1000 ease-in-out border-2 border-blue-400 transform hover:scale-90 hover:opacity-50 px-2 cursor-pointer rounded-md shadow-lg font-semibold py-1'>
                <Link href='/register'>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
