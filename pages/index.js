// import styles from '../styles/Home.module.css'
import { Button, Layout, Meta } from '../components'

export default function Home() {
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
            <Button text='Individual' />
            <Button text='Couples' />
            <Button text='Teens' />
            <Button text='Children' />
          </div>
        </section>
      </main>
    </div>
  )
}
