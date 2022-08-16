import {useEffect} from "react"
import {  Details } from './'
import server from "../config"
import axios from "axios"

const data = [
{user: "dennis", created: "1-1-20202"},
{user: "Miriam", created: "1-1-20202"},
{user: "Kelvin", created: "1-1-20202"},
{user: "Thomas", created: "1-1-20202"},
]

const ConsultAdmin = () => {
	useEffect(() => {
		try{
	const getConsults = async () => {
		const { data } = await axios.get(`${server}/api/v1/consults/`)
		console.log(data)
	}
	getConsults()
}
		catch(error){
			console.log(error)
		}
	})
  return (
  <>  
      <Details number="No." author="Client" body="Date" header={true} />

      {data.map((item, index) => (

        <Details key={index} number={index} author={item.user} body={item.created} header={false} dest="consultations"/>
      ))}
  </>
  )
}
export default ConsultAdmin