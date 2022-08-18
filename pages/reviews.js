import { Layout, Reviews, Logo, Meta } from '../components'
import axios from 'axios'
import server from '../config'

const reviews = ({ data: reviewData }) => {
  return (
    <section>
      <Meta
        title='Reviews on Talkspace kenya'
        description='Get reviews of the work of Morrin Macharia on Talkspace Kenya'
      />
      <Logo />
      <Layout />
      <Reviews reviewData={reviewData} />
    </section>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${server}/api/v1/reviews/`)
  return {
    props: {
      data,
    },
  }
}
export default reviews
