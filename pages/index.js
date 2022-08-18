// import styles from '../styles/Home.module.css'
import { Button, Layout, Meta } from '../components'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Home() {
  const { username } = useSelector((state) => state.user)
  return (
    <div>
      <Meta />
      <main>
        <Layout />
        <section className='md:bg-smile bg-cover w-screen h-screen flex flex-col direction-column justify-center items-center '>
          <div className='text-center '>
            <h1 className='text-4xl font-bold my-5 md:text-white '>
              You deserve happiness
            </h1>
            <p className='text-lg font-semibold md:text-gray-200'>
              What kind of help do you need?
            </p>
          </div>

          <div className='px-10 flex flex-col w-screen justify-center gap-10 mt-5 md:flex-row'>
            <button className=' bg-orange-400 ring-2 ring-red-300 rounded-md p-3 border-white font-bold cursor-pointer mx-2 hover:bg-orange-500 transition-al duration-500 ease-in-out '>
              <Link
                href={
                  username
                    ? { pathname: '/consult', query: { service: 'individual' } }
                    : '/login'
                }
              >
                Individual
              </Link>
            </button>

            <button className=' bg-orange-400 ring-2 ring-red-300 rounded-md p-3 border-white font-bold cursor-pointer mx-2 hover:bg-orange-500 transition-al duration-500 ease-in-out '>
              <Link
                href={
                  username
                    ? { pathname: '/consult', query: { service: 'couples' } }
                    : '/login'
                }
              >
                Couples
              </Link>
            </button>

            <button className=' bg-orange-400 ring-2 ring-red-300 rounded-md p-3 border-white font-bold cursor-pointer mx-2 hover:bg-orange-500 transition-al duration-500 ease-in-out '>
              <Link
                href={
                  username
                    ? { pathname: '/consult', query: { service: 'teens' } }
                    : '/login'
                }
              >
                Teens
              </Link>
            </button>

            <button className=' bg-orange-400 ring-2 ring-red-300 rounded-md p-3 border-white font-bold cursor-pointer mx-2 hover:bg-orange-500 transition-al duration-500 ease-in-out '>
              <Link
                href={
                  username
                    ? { pathname: '/consult', query: { service: 'children' } }
                    : '/login'
                }
              >
                Children
              </Link>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
