const Social = ({ link, icon }) => {
  return (
    <a href={link} className='mx-1 my-5' target='blank'>
      <span className='hover:text-orange-500'>{icon}</span>
    </a>
  )
}

export default Social
