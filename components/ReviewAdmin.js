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

const ReviewAdmin = () => {
  return (
 <>    
      <Details number="No." author="Author" body="Review" header={true} />

      {data.map((item, index) => (

        <Details key={index} number={index} author={item.user} body={item.created} header={false} dest="reviews"/>
      ))}
  </>
  )
}

export default ReviewAdmin