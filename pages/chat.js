import { ChatComponent, Header, Layout, Logo } from '../components'

const chat = () => {
  return (
    <section>
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
