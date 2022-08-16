import {DashboardLink} from "./"

const Sidebar = () => {
  return (
  <section className="w-screen md:w-1/4">
  <div>
    <h2 className="text-2xl text-orange-400 font-semibold mt-4 ">Admin</h2>
    <section >
    <h3 className="text-lg text-blue-500 font-semibold mt-5">Get Stats</h3>
    <div className="flex flex-wrap md:block">
    <DashboardLink title="Users" link="/admin/users"/>
    <DashboardLink title="Consults" link="/admin/consult"/>
    <DashboardLink title="Comments" link="/admin/comment"/>
    <DashboardLink title="Reviews" link="/admin/review"/>
    <DashboardLink title="Messages" link="/admin/messages"/>
    </div>
    <br />
    <hr />
    </section>
    </div>
	<section className="flex flex-col pl-0">
	<h3 className="text-lg mb-1 text-blue-500 font-semibold mt-5">Go to page</h3>
    <div className="flex flex-wrap md:block">
    <DashboardLink title="Dashboard" link="/dashboard"/>
	<DashboardLink title="Home" link="/"/>
    <DashboardLink title="About" link="/about"/>
    <DashboardLink title="Consult" link="/consult"/>
    <DashboardLink title="Chat" link="/chat"/>
    <DashboardLink title="Reviews" link="/reviews"/>
    <DashboardLink title="Contact" link="/contact" />
    </div>
    </section>
    <br />
    <hr />
    </section>
  )
}

export default Sidebar


