const Info = ({ title, createdAt, content, index }) => {
  return (
    <div className='flex'>
      <div className='w-1/12'>
        <p>{index}</p>
      </div>
      <div className='w-11/12 flex justify-between'>
        <p>{content}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default Info
