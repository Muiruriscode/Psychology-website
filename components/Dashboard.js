import React, { useEffect, useState } from 'react'
import { Info } from './'
import axios from 'axios'
import { useSelector } from 'react-redux'
import server from '../config'
import { Sidebar } from './'

const DashBoard = () => {
  const [newUsers, setNewUsers] = useState([])
  const [newConsults, setNewConsults] = useState([])
  const [newComments, setNewComments] = useState([])
  const [newReviews, setNewReviews] = useState([])
  const [newMessages, setNewMessages] = useState([])

  const { token, id } = useSelector((state) => state.user)
  useEffect(() => {
    try {
      const getNewUsers = async () => {
        const { data } = await axios.get(`${server}/api/v1/users/?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setNewUsers(data)
      }
      getNewUsers()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  useEffect(() => {
    try {
      const getNewReviews = async () => {
        const { data } = await axios.get(`${server}/api/v1/reviews?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setNewReviews(data)
      }
      getNewReviews()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  useEffect(() => {
    try {
      const getNewComments = async () => {
        const { data } = await axios.get(`${server}/api/v1/comments?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setNewComments(data)
      }
      getNewComments()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  useEffect(() => {
    try {
      const getNewConsults = async () => {
        const { data } = await axios.get(`${server}/api/v1/consults?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setNewConsults(data)
      }
      getNewConsults()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  return (
    <div className='md:flex px-2 md:px-5'>
      <Sidebar />
      <section className='w-full md:w-3/4 mt-5 md:mt-0'>
        <h2 className='text-2xl text-orange-400 mb-2 font-semibold md:ml-10'>
          Get The Latest Stats
        </h2>
        <section className='md:flex md:flex-wrap md:justify-center md:gap-2'>
          <article className='w-full md:w-3/4 flex-none shadow-md md:shadow-xl mb-5'>
            <h2 className='text-xl font-semibold'>New join users</h2>
            {newUsers.map((user, index) => (
              <Info
                content={user.username}
                createdAt={user.createdAt}
                index={index + 1}
                key={user._id}
              />
            ))}
          </article>
          <article className='w-full md:w-3/4 flex-none shadow-md md:shadow-xl mb-5'>
            <h2 className='text-xl font-semibold'>Latest consults</h2>
            {newConsults.map((item, index) => (
              <Info
                content={item.service}
                createdAt={item.date}
                key={item._id}
                index={index + 1}
              />
            ))}
          </article>
          <article className='w-full md:w-3/4 flex-none shadow-md md:shadow-xl mb-5'>
            <h2 className='text-xl font-semibold'>Your Latest reviews</h2>
            {newReviews.map((review, index) => (
              <Info
                content={review.author}
                createdAt={review.body}
                key={review._id}
                index={index + 1}
              />
            ))}
          </article>
          <article className='w-full md:w-3/4 flex-none shadow-md md:shadow-xl mb-5'>
            <h2 className='text-xl font-semibold'>Comments from users</h2>
            {newComments.map((item, index) => (
              <Info
                content={item.author}
                createdAt={item.comment}
                key={item._id}
                index={index + 1}
              />
            ))}
          </article>
        </section>
      </section>
    </div>
  )
}

export default DashBoard
