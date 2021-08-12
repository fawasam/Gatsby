import React from 'react'
import "./selected.scss"

//images
import Restaurant from "../../../assets/img/Tasty food.png"
import Gatsbyp from "../../../assets/img/gatsby-p.png"
import University from "../../../assets/img/university.png"
import AppLanding from "../../../assets/img/app-landing.png"
import Arrow from "../../../assets/img/arrow.png"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Selected = () => {
    return (
        <div className='selected-prj'>
            <div className="project-container">
                <div className="one-project">
                    <div className="one-content">
                        <h4>Selected <br /> <span>Project</span></h4>
                        <img src={Restaurant} alt="" />
                        <div className="desc">
                            <a href="https://web-tasty-restaurant.netlify.app/">
                        <span className="arrow">
                        <img className='icon' src={Arrow} alt="" />
                        </span> 
                        <h2>Tasty Food Restaurant</h2>
                        <span>Website & Branding</span>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="2-project">
                <div className="2-content">
                        <img src={Gatsbyp} alt="" />
                        <div className="desc">
                            <a href="https://gatsbyportfoliosite.netlify.app/">
                        <span className="arrow">
                        <img className='icon' src={Arrow} alt="" />
                        </span> 
                        <h2>Gatsby Portfolio</h2>
                        <span>Website & Gatsby</span>
                        </a>
                        </div>
                 </div>
                </div>
                <div className="three-project">
                <div className="3-content">
                        <img src={University} alt="" />
                        <div className="desc">
                        <a href="https://university-web.netlify.app/">
                        <span className="arrow">
                        <img className='icon' src={Arrow} alt="" />
                        </span> 
                        <h2>University Website</h2>
                        <span>Website & University</span>
                    </a>
                    </div>
                 </div>
                </div>
                <div className="four-project">
                <div className="4-content">
                        <img src={AppLanding} alt="" />
                        <div className="desc">
                            <a href="https://gatsbytrigger.netlify.app/">
                        <span className="arrow">
                        <img className='icon' src={Arrow} alt="" />
                        </span> 

                        <h2>App Landing Page</h2>
                        <span>Website & Branding & Gsap</span>
                        </a>
                        </div>
                 </div>
                </div>
            </div>
            
        </div>
    )
}

export default Selected
