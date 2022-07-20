import { useState } from 'react'
import { Layout, Reviews } from '../components'
import { reviewData } from '../data'

const reviews = () => {
  return (
    <article>
      <Layout />
      <Reviews />
    </article>
  )
}

export default reviews
