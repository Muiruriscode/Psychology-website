import { ChatComponent, Header, Layout, Logo, Meta } from '../components'
import { useRouter } from 'next/router'

const chat = () => {
  const { id, sender, other } = router.query
  return (
    <section>
      <Meta title='Chat with Morrin Macharia' />
      <Layout />
      <Logo />
      <div className='md:px-5'>
        <Header title='Talk to Me' />
        <ChatComponent senderId={id} sender={sender} other={other} />
      </div>
    </section>
  )
}

export default chat
