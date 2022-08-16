import axios from "axios"

const Details = ({ number, author, body, header}) => {

        const EditInfo = async () => {
            // const {data} = await axios.patch(`${server}/api/v1/${dest}/${id}`)
        }

        const DeleteInfo = async () => {
            // const {data} = await axios.delete(`${server}/api/v1/${dest}/${id}`)
        }

  return (
    <div className={`flex ${header && "font-semibold bg-orange-200"}`}>
    	<div className="w-3/4 flex">
    	<div className="w-2/12 pl-2">
    	<p>{`${!header ? number+1: number}`}</p>
    	</div>
    	<div  className="w-10/12 flex">
    	<p className="w-1/4">{author}</p>
    	<p className="w-3/4">{body}</p>
    	</div>
    	</div>
    	<div className="flex justify-around w-1/4">
        <button className={`my-1 rounded-sm px-2 py-1 font-semibold  ${!header && "bg-blue-200 text-gray-700 hover:bg-blue-300"}`}>Edit</button>
        <button className={`my-1 rounded-sm px-2 py-1 font-semibold  ${!header && "bg-red-200 text-gray-700 hover:bg-red-300"}`}>Delete</button>

    	</div>
    </div>
  )
}

export default Details
