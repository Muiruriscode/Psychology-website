import { useEffect, useState } from 'react'
import { Details } from './'
import server from '../config'
import axios from 'axios'
import { useSelector } from 'react-redux'

const UsersAdmin = () => {
  const [user, setUser] = useState([])
  const { token } = useSelector((state) => state.user)

  useEffect(() => {
    try {
      const getUsers = async () => {
        const { data } = await axios.get(`${server}/api/v1/users/`, {
          headers: { authorization: `Bearer ${token}` },
        })
        console.log(data)
        setUser(data)
      }
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }, [token])

  return (
    <>
      <Details
        number='No.'
        username='Username'
        body='Created At'
        header={true}
      />
      {user.map((item, index) => (
        <Details
          key={item._id}
          number={index}
          username={item.username}
          email={item.email}
          body={item.email}
          header={false}
          dest='users'
          id={item._id}
        />
      ))}
    </>
  )
}

export default UsersAdmin
