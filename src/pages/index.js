import React, { useEffect } from "react"
import "../styles/home.scss"


// component 
import Layout from "../components/Layout"
import Home from "../components/Home/Home"

export default function Start() {

  return (
    <div className='home'>
      <Layout >
        <Home/>
      </Layout>
    </div>
  )
}


