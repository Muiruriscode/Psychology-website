import {  ReviewAdmin, Sidebar } from '../../components'

const review = () => {
  return (
 <div className="md:flex px-2 md:px-5">
 <Sidebar />
 <section className="w-screen bg-green-200">
      <h1 className='md:px-5 text-xl md:text-3xl mt-2 font-bold md:mt-2 mb-3 text-blue-600'>
        Your Reviews
      </h1>
      <article className="flex-none md:px-5 shadow-lg md:mx-5">
      <h2 className="text-xl font-semibold mb-3">Reviews</h2>
      
      <ReviewAdmin />
    </article>
    </section>
  </div>
  )
}

export default review
