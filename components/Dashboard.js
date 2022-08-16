import React, {useEffect} from 'react'
import Link from "next/link"

import LinkItem from './LinkItem'
import {Info} from "./"
import axios from "axios"
import {useSelector} from "react-redux"
import server from "../config"
import {Sidebar} from "./"

const DashBoard = () => {
const {token} = useSelector(state => state.user)
useEffect(() => {
    try{
        const getNewUsers = async () => {
            const {data: users} = await axios.get(`${server}/api/v1/users/?new=true`, 
{
          headers: { authorization: `Bearer ${token}` },
        }
            )
            console.log(users)
        }
        getNewUsers()
    }catch(error){
        console.log(error)
    }
   },[])

useEffect(() => {
    try{
        const getNewReviews = async () => {
            const {data: reviews} = await axios.get(`${server}/api/v1/reviews?new=true`,{
          headers: { authorization: `Bearer ${token}` },
        })
            console.log(reviews)
        }
        getNewReviews()
    }catch(error){
        console.log(error)
    }
   },[])

useEffect(() => {
    try{
        const getNewComments = async () => {
            const {data: comments} = await axios.get(`${server}/api/v1/comments?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
            console.log(comments)
        }
        getNewComments()
    }catch(error){
        console.log(error)
    }
   },[])

useEffect(() => {
    try{
        const getNewConsults = async () => {
            const {data: consults} = await axios.get(`${server}/api/v1/consults?new=true`, {
          headers: { authorization: `Bearer ${token}` },
        })
            console.log(users)
        }
        getNewConsults()
    }catch(error){
        console.log(error)
    }
   },[])

  return (
    <div className="md:flex px-2 md:px-5">
    <Sidebar />
    
    <section className="w-full md:w-3/4 mt-5 md:mt-0">
    <h2 className="text-2xl text-orange-400 mb-2 font-semibold md:ml-10">Get The Latest Stats</h2>
    <section className="md:flex md:flex-wrap md:justify-center md:gap-10">
     <article className="w-full md:w-5/12 flex-none shadow-md md:shadow-xl mb-5">
        <h2 className="text-xl font-semibold">New join users</h2>
        <Info content="username" createdAt="1-1-2022" />
    </article>
     <article className="w-full md:w-5/12 flex-none shadow-md md:shadow-xl mb-5">
        <h2 className="text-xl font-semibold">Latest consults</h2>
        <Info content="author" createdAt="1-2-2022"/>
    </article>
     <article className="w-full md:w-5/12 flex-none shadow-md md:shadow-xl mb-5">
        <h2 className="text-xl font-semibold">Your Latest reviews</h2>
        <Info content="review" createdAt="1-1-2022"/>
    </article>
     <article className="w-full md:w-5/12 flex-none shadow-md md:shadow-xl mb-5">
        <h2 className="text-xl font-semibold">Comments from users</h2>
        <Info content="comment" createdAt="1-1-2022"/>  
    </article> 
    </section>
    </section>
    </div>
  )
}

export default DashBoard
