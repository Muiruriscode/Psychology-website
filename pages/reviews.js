import { useState } from 'react'
import { Layout, Reviews } from '../components'
import { reviewData } from '../data'
import axios from 'axios'
import server from '../config'

const reviews = ({ data: reviewData }) => {
  console.log(reviewData)
  return (
    <section>
      <Layout />
      <Reviews reviewData={reviewData} />
    </section>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${server}/api/v1/reviews/`)
  console.log('data', data)
  return {
    props: {
      data,
    },
  }
}
export default reviews
