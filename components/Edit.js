import React, { useState } from 'react'
import { Label, Button } from './'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toast'

const Edit = ({ dest, body, username, email, id }) => {
  const [user, setUser] = useState(username)
  const [userEmail, setUserEmail] = useState(email)
  const [userBody, setUserBody] = useState(body)

  const { token } = useSelector((state) => state.user)

  const editInfo = async () => {
    try {
      if (dest === 'comments') {
        const { data } = await axios.patch(
          `${server}/api/v1/${dest}/${id}`,
          {
            author: user,
            email: userEmail,
            comment: userBody,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        )
        toast.success(data.msg)
        console.log(data)
      }
      if (dest === 'reviews') {
        const { data } = await axios.patch(
          `${server}/api/v1/${dest}/${id}`,
          {
            author: user,
            email: userEmail,
            body: userBody,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        )
        toast.success(data.msg)
        console.log(data)
      }
      if (dest === 'consults') {
        const { data } = await axios.patch(
          `${server}/api/v1/${dest}/${id}`,
          {
            client: user,
            date: userBody,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        )
        toast.success(data.msg)
        console.log(data)
      }
    } catch (error) {
      if (error.response.data?.msg) {
        toast.error(error.response.data.msg)
      } else {
        toast.error(error.message)
      }
    }
  }

  if (dest === 'users') {
    return (
      <section className='flex h-screen justify-center items-center'>
        <ToastContainer />
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl text-blue-500 text-center font-semibold'>
            Update user
          </h1>
          <div>
            <Label name='username' />
            <input
              type='text'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <Label name='email' />
            <input
              type='email'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <Button text='update' className='mt-10' onClick={() => EditInfo()} />
        </div>
      </section>
    )
  }
  if (dest === 'comments' || dest === 'reviews') {
    return (
      <section className='flex h-screen justify-center items-center'>
        <ToastContainer />
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl text-blue-500 text-center font-semibold'>
            Update {dest}
          </h1>
          <div>
            <Label name='Author' />
            <input
              type='text'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <Label name='email' />
            <input
              type='email'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <textarea
            name=''
            id=''
            cols='10'
            rows='10'
            className='border border-gray-200 rounded-sm'
            value={body}
            onChange={(e) => setUserBody(e.target.value)}
          ></textarea>
          <Button text='update' className='mt-10' onClick={editInfo} />
        </div>
      </section>
    )
  }
  if (dest === 'consults') {
    return (
      <section className='flex h-screen justify-center items-center'>
        <ToastContainer />
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl text-blue-500 text-center font-semibold'>
            Update consult
          </h1>
          <div>
            <Label name='username' />

            <input
              type='text'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <Label name='date' />
            <input
              type='datetime'
              className='w-full p-1 border border-gray-300 rounded-sm px-5'
              value={body}
              onChange={(e) => setUserBody(e.target.value)}
            />
          </div>
          <Button text='update' className='mt-10' onClick={editInfo} />
        </div>
      </section>
    )
  }
  return (
    <h1 className='text-3xl text-center mt-20 text-semibold text-blue-500'>
      No Item to Edit
    </h1>
  )
}

export default Edit
