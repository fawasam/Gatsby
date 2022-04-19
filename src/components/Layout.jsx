import React,{useRef,useEffect} from 'react'
import Footer from './footer/Footer'
import Nav from './navbar/Nav'
import gsap from 'gsap'
import "./layout.scss"


const Layout = (props) => {
    const homeRef =useRef(null)
    useEffect(()=>{

       console.log(homeRef.current);
       gsap.from( 
           homeRef.current,{
               duration:1,
               autoAlpha:0,
               ease:'none',
               delay:0.5

        })
    },[]);
    return (
        <div className ='mainPage' ref={homeRef}>
             {/* <div class="custom-cursor"></div> */}
            <Nav/>
            {props.children}
            <Footer/>          
        </div>
    )
}

export default Layout
