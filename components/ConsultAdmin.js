import { useEffect, useState } from 'react'
import { Details } from './'
import server from '../config'
import axios from 'axios'
import { useSelector } from 'react-redux'
const data = [
  { user: 'dennis', created: '1-1-2022' },
  { user: 'Miriam', created: '1-1-2022' },
  { user: 'Kelvin', created: '1-1-2022' },
  { user: 'Thomas', created: '1-1-2022' },
]

const ConsultAdmin = () => {
  const [consult, setConsult] = useState([])
  const { token } = useSelector((state) => state.user)
  useEffect(() => {
    try {
      const getConsults = async () => {
        const { data } = await axios.get(`${server}/api/v1/consults/`, {
          headers: { authorization: `Bearer ${token}` },
        })
        setConsult(data)
        console.log(data)
      }
      getConsults()
    } catch (error) {
      console.log(error)
    }
  }, [token])
  return (
    <>
      <Details number='No.' username='Client' body='Date' header={true} />

      {consult.map((item, index) => (
        <Details
          key={item._id}
          number={index}
          username={item.client}
          body={item.date}
          header={false}
          id={item._id}
          dest='consults'
        />
      ))}
    </>
  )
}
export default ConsultAdmin
