import { useEffect, useState } from 'react'
import { Details } from './'
import server from '../config'
import axios from 'axios'
import { useSelector } from 'react-redux'

const data = [
  { user: 'dennis', created: '1-1-20202', email: '123@gmail.com' },
  { user: 'Miriam', created: '1-1-20202', email: '123@gmail.com' },
  { user: 'Kelvin', created: '1-1-20202', email: '123@gmail.com' },
  { user: 'Thomas', created: '1-1-20202', email: '123@gmail.com' },
]

const ReviewAdmin = () => {
  const [reviews, setReviews] = useState([])
  const { token } = useSelector((state) => state.user)

  useEffect(() => {
    try {
      const getComments = async () => {
        const { data } = await axios.get(`${server}/api/v1/reviews/`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setReviews(data)
        console.log(data)
      }
      getComments()
    } catch (error) {
      console.log(error)
    }
  }, [token])
  return (
    <>
      <Details number='No.' username='Author' body='Review' header={true} />

      {reviews.map((item, index) => (
        <Details
          key={item._id}
          number={index}
          username={item.author}
          body={item.body}
          email={item.email}
          header={false}
          id={item._id}
          dest='reviews'
        />
      ))}
    </>
  )
}

export default ReviewAdmin
