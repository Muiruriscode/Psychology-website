import {  Details, ConsultAdmin, Sidebar } from '../../components'

const consult = () => {
  return (
  <div className="md:flex px-2 md:px-5">
  <Sidebar />
  <section className="w-full">
      <h1 className='md:px-5 text-xl md:text-3xl mt-2 font-bold md:mt-2 mb-3 text-blue-600'>
        Your Consultations
      </h1>
      <article className="flex-none md:px-5 shadow-lg md:mx-5">
      <h2 className="text-xl font-semibold mb-3">Consultations</h2>
      <ConsultAdmin />
    </article>
    </section >
  </div>
  )
}

export default consult
