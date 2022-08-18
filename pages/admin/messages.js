import { Details, MessagesAdmin, Sidebar, Meta } from '../../components'

const messages = () => {
  return (
    <div className='md:flex px-2 md:px-5'>
      <Meta
        title='Messages on Talkspace Kenya'
        description='Messages for Morrin Macharia on Talkspace Kenaya'
      />
      <Sidebar />
      <section className='w-full'>
        <h1 className='md:px-5 text-xl md:text-3xl mt-2 font-bold md:mt-2 mb-3 text-blue-600'>
          User Messages
        </h1>
        <article className='flex-none md:px-5 shadow-lg md:mx-5'>
          <h2 className='text-xl font-semibold mb-3'>Messages</h2>
          <MessagesAdmin />
        </article>
      </section>
    </div>
  )
}

export default messages
