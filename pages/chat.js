import { ChatComponent, Header, Layout } from '../components'

const chat = () => {
  return (
    <section>
      <Layout />
      <div className='md:px-5'>
        <Header title='Talk to Me' />
        <ChatComponent />
      </div>
    </section>
  )
}

export default chat
