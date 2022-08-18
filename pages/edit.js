import React from 'react'
import { Edit, Meta } from '../components'
import { useRouter } from 'next/router'

const EditPage = () => {
  const router = useRouter()
  const { id, dest, username, body, email } = router.query
  console.log(username, body)
  return (
    <>
      <Meta
        title='Edit on Talkspace kenya'
        description='Edit user information on Talkspace Kenya'
      />
      <Edit dest={dest} username={username} body={body} email={email} id={id} />
    </>
  )
}

export default EditPage
