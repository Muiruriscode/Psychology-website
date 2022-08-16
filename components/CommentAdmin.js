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

const CommentAdmin = () => {
	useEffect(() => {
		try{
	const getComments = async () => {
		const { data } = await axios.get(`${server}/api/v1/comments/`)
		console.log(data)
	}
	getComments()
}
		catch(error){
			console.log(error)
		}
	})
	
  return (
  <>      
      <Details number="No." author="Author" body="Comment" header={true} />

      {data.map((item, index) => (
        <Details key={index} number={index} author={item.user} body={item.created} header={false} dest="comments" />
      ))}
  </>
  )
}


export default CommentAdmin
