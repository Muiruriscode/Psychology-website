import React from 'react'
import Link from "next/link"

const DashBoardLink = ({title, link}) => {
	console.log(link)
  return (
     <article >
    <button className="pr-10 transition-all duration-300 ease-in-out text-gray-500 hover:bg-gray-100 mt-2 shadow-sm">
    <Link href={link}>{title}</Link>
    </button>
    </article>
  )
}

export default DashBoardLink