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

const MessagesAdmin = () => {
  return (
 <>    
      <Details number="No." author="Author" body="Message" header={true} />

      {data.map((item, index) => (
    <div className={`flex items-center`}>
    	<div className="w-3/4 flex">
    	<div className="w-1/12 pl-2">
    	<p>{index+1}</p>
    	</div>
    	<div  className="w-11/12 flex">
    	<p className="w-1/4">{item.user}</p>
    	<p className="w-3/4">{item.created}</p>
    	</div>
    	</div>
    	<div className="flex justify-around items-center w-1/4">
    	<button className="bg-blue-200 my-1 rounded-sm px-2 py-1 font-semibold text-orange-600 hover:bg-blue-300">Reply</button>
    	<p>Delete</p>
    	</div>
    </div>
      ))}
  </>
  )
}

export default MessagesAdmin