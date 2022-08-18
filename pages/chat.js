import { ChatComponent, Header, Layout, Logo, Meta } from '../components'

const chat = () => {
  return (
    <section>
      <Meta title='Chat with Morrin Macharia' />
      <Layout />
      <Logo />
      <div className='md:px-5'>
        <Header title='Talk to Me' />
        <ChatComponent />
      </div>
    </section>
  )
}

export default chat
