import { messages } from '../data'
import { Messages, Input } from './'
import { FaPaperPlane } from 'react-icons/fa'

const ChatComponent = () => {
  return (
    <div className='md:px-10'>
      <div>
        <div className='h-full bg-white my-2 border border-gray-300 px-5 pt-2 rounded flex flex-col mt-10 shadow-md'>
          {messages.map((message) => (
            <Messages
              key={message.id}
              text={message.text}
              other={message.other}
            />
          ))}
        </div>
        <div className='flex'>
          <Input />
          <button className='transition-all duration-200 ease bg-blue-500 flex justify-center items-center w-20 cursor-pointer flex-none hover:bg-blue-400 text-white text-lg'>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatComponent
