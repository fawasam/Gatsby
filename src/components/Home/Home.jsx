import React , {useRef , useEffect} from 'react'
import './home.scss'
import {TweenMax ,Power3} from 'gsap'

//images
import Gmail from "../../assets/svg/gmail.png"
import Twitter from "../../assets/svg/twitter.png"
import Dribble from "../../assets/svg/dribble (2).png"

//components
import Selected from './selected-projects/Selected'
import Morework from '../morework/Morework'
import { easing } from '@material-ui/core'

const Home = () => {
    const ref =useRef()
    useEffect(()=>{
        TweenMax.from(".title" , {y:-40,ease:Power3.easeInOut })
        TweenMax.to(".title" , {y:0 , duration:2 , opacity :1 ,ease:Power3.easeInOut})
        TweenMax.from(".name" , {y:-40,ease:Power3.easeInOut })
        TweenMax.to(".name" , {y:0 , duration:2, opacity :1 ,ease:Power3.easeInOut})
        TweenMax.from(".falling_icon" , {y:-40, ease:Power3.easeInOut})
        TweenMax.to(".falling_icon" , {y:0 , duration:2 , opacity :1 , ease:Power3.easeInOut})
    },[])
    return (
        <>
        <div className="main " >
            <div className="falling_icon fall-gmail">
            <a href="mailto:fawasam32@gmail.com?Subject=Hello"><img className="icon_media" src={Gmail} alt="imge"/></a>
            </div>
            <div className="falling_icon fall-twitter">
            <a href="https://twitter.com/FawasAM2">
             <img className="icon_media" src={Twitter} alt="imag"/></a>
            </div>
            <div className="falling_icon fall-dribble">
            <a href="https://www.linkedin.com/in/fawas-am-6a29b4197/">
             <img className="icon_media" src={Dribble} alt="imag"/></a>
            </div>
            <div className="name">
                <span data-scroll>Fawas am</span>
            </div>
            <div className="title" data-scroll>
                <h1>UX-UI designer <br/><span>UI developer
                </span>
                </h1>
            </div>
        </div>
        <Selected/>
        {/* <Morework/> */}
        </>
    )
}

export default Home
