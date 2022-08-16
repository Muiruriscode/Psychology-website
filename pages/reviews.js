import { useState } from 'react'
import { Layout, Reviews, Logo } from '../components'
import { reviewData } from '../data'
import axios from 'axios'
import server from '../config'

const reviews = ({ data: reviewData }) => {
  return (
    <section>
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
