import React from 'react'
import Image from 'next/image'
import afro from '../assets/afro-tr.png'
import { Header, Layout, Logo } from '../components'

const about = () => {
  return (
    <>
      <Layout />
      <div className='px-5'>
        <Logo />
        <Header title='About Me' />
        <div className='h-screen flex items-start gap-10 mt-14'>
          <div className='hidden md:inline-block md:flex-1'>
            <Image src={afro} alt='photo' className='w-full' />
          </div>
          <article className='w-full md:w-7/12'>
            <h2 className='text-2xl font-bold mb-5'>About Me</h2>
            <p className='text-gray-800 text-lg font-mono'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam quam ipsum excepturi iste incidunt perferendis hic vitae
              repudiandae voluptas nihil quasi labore optio nesciunt, dolores
              obcaecati, eaque iusto. Culpa velit aspernatur quaerat fugit quasi
              in soluta alias eveniet numquam libero enim commodi nemo quae
              facere eius laudantium nam harum hic repellat ullam, voluptas nisi
              eaque laborum qui? Deleniti, repudiandae fugit quam earum
              voluptates accusantium aliquid. Provident similique cumque ut
              doloremque omnis, expedita consequuntur aut, molestiae nam rerum,
              sit deleniti officia quas porro quae repellat iste voluptatibus
              laboriosam dolorem minus dolor ullam? Voluptatibus unde corrupti
              necessitatibus mollitia blanditiis? Magnam, fugit rem.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

export default about
