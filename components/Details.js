import axios from 'axios'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toast'

const Details = ({ number, username, body, header, id, dest, email }) => {
  const deleteInfo = async () => {
    try {
      const { data } = await axios.delete(`${server}/api/v1/${dest}/${id}`)
      console.log(data)
      toast.success(data.msg)
    } catch (error) {
      if (error.response.data?.msg) {
        toast.error(error.response.data.msg)
      } else {
        toast.error(error.message)
      }
    }
  }
  console.log('username', username, email)
  return (
    <div className={`flex ${header && 'font-semibold bg-orange-200'}`}>
      <div className='w-3/4 flex'>
        <ToastContainer />
        <div className='w-2/12 pl-2'>
          <p>{`${!header ? number + 1 : number}`}</p>
        </div>
        <div className='w-10/12 flex justify-between'>
          <div className='w-1/2 flex-none '>
            <p>{username}</p>
          </div>
          <div className='w-1/2 flex-none'>
            <p>{body}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-around w-1/4'>
        <button
          className={`my-1 rounded-sm px-2 py-1 font-semibold  ${
            !header && 'bg-blue-200 text-gray-700 hover:bg-blue-300'
          }`}
        >
          <Link
            href={{
              pathname: '/edit',
              query: { id: number, dest, body, username, email },
            }}
          >
            Edit
          </Link>
        </button>
        <button
          className={`my-1 rounded-sm px-2 py-1 font-semibold  ${
            !header && 'bg-red-200 text-gray-700 hover:bg-red-300'
          }`}
          onClick={deleteInfo}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Details
