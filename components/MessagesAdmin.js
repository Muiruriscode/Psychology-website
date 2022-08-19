import { useEffect } from 'react'
import { Details, MessageData } from './'
import server from '../config'
import axios from 'axios'

const data = [
  { user: 'dennis', body: '1-1-20202' },
  { user: 'Miriam', body: '1-1-20202' },
  { user: 'Kelvin', body: '1-1-20202' },
  { user: 'Thomas', body: '1-1-20202' },
]

const MessagesAdmin = () => {
  return (
    <>
      <Details number='No.' author='Author' body='Message' header={true} />

      {data.map((item, index) => (
        <MessageData key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default MessagesAdmin
