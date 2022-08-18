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

const CommentAdmin = () => {
  const [comments, setComments] = useState([])
  const { token } = useSelector((state) => state.user)

  useEffect(() => {
    try {
      const getComments = async () => {
        const { data } = await axios.get(`${server}/api/v1/comments/`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setComments(data)
      }
      getComments()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  return (
    <>
      <Details number='No.' username='Author' body='Comment' header={true} />

      {comments.map((item, index) => (
        <Details
          key={index}
          number={index}
          username={item.author}
          body={item.comment}
          email={item.email}
          header={false}
          id={item._id}
          dest='comments'
        />
      ))}
    </>
  )
}

export default CommentAdmin
