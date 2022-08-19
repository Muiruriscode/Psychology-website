import { useEffect, useRef, useState } from 'react'
import { Messages, Input } from './'
import { FaPaperPlane } from 'react-icons/fa'
import { addMessage, loadMessages } from '../features/chat/chat'
import { useDispatch, useSelector } from 'react-redux'
import server from '../config'
import { io } from 'socket.io-client'
import { ToastContainer, toast } from 'react-toast'
import axios from 'axios'

const ChatComponent = ({ senderId, other }) => {
  const [info, setInfo] = useState('')
  const [response, setResponse] = useState([])
  const scrollRef = useRef()
  const socket = useRef()
  const dispatch = useDispatch()
  const { id, token } = useSelector((state) => state.user)
  const { messages } = useSelector((state) => state.chat)

  const handleClick = async () => {
    try {
      // const { data } = await axios.post(
      //   `${server}/api/v1/messages/${senderId ? senderId : id}`,
      //   {
      //     roomId: senderId ? senderId : id,
      //     sender: senderId ? senderId : id,
      //     body: info,
      //   },
      //   {
      //     headers: { authorization: `Bearer ${token}` },
      //   }
      // )
      dispatch(addMessage({ body: info }))
      setInfo('')
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`${server}/api/v1/messages/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        dispatch(loadMessages(data.messages))
        setInfo('')
      } catch (error) {
        console.log(error)
      }
    }
    getMessages()
  }, [id, token, dispatch])

  //  useEffect(() => {
  //     socket.current = io('ws://localhost:4000/')
  //   }, [])

  // useEffect(() => {
  //   // socket.current.on('getMessage', (body) => {
  //   //   setResponse(body)
  //   // })
  //   dispatch(addMessage({ body: response }))
  // }, [dispatch, response])

  return (
    <div className='md:px-10'>
      <div>
        <div
          className='h-96 bg-white my-2 border border-gray-300 px-5 pt-2 rounded flex flex-col mt-10 shadow-md overflow-hidden'
          ref={scrollRef}
        >
          {messages.length > 1 ? (
            messages.map((message, index) => (
              <Messages key={index} text={message.body} />
            ))
          ) : messages.length === 1 ? (
            <Messages text={messages[0].body} />
          ) : (
            <p className='text-gray-300 text-xl text-center mt-5'>
              Send me a message...
            </p>
          )}
        </div>
        <div className='flex'>
          <input
            type='text'
            className='w-full p-1 border border-gray-300 rounded-sm'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <button
            className='transition-all duration-200 ease bg-blue-500 flex justify-center items-center w-20 cursor-pointer flex-none hover:bg-blue-400 text-white text-lg'
            onClick={handleClick}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatComponent
