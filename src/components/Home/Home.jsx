import React from 'react'
import './home.scss'

//images
import Gmail from "../../assets/svg/gmail.png"
import Twitter from "../../assets/svg/twitter.png"
import Dribble from "../../assets/svg/dribble (2).png"

//components
import Selected from './selected-projects/Selected'
import Morework from '../morework/Morework'

const Home = () => {
    return (
        <>
        <div className="main" >
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
