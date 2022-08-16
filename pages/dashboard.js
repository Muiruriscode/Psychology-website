import { Dashboard, Header } from '../components'


const dashboard = () => {
  return (
    <article className=' h-screen'>
    <h1 className='px-2 md:px-5 text-2xl md:text-3xl mt-2 font-bold md:mt-2 mb-3 text-blue-600'>
        DashBoard
      </h1>
      <Dashboard />
    </article>
  )
}

export default dashboard