import React from 'react'
import Layout from '../components/Layout'
import "../assets/style/about.scss"
const about = () => {
    return (
     
           <Layout>
               <div className="about">
                   <div className="about-title">
                       <h1>Fawas am</h1>
                   </div>
                   <div className="about-main">
                       <div className="about-left"></div>
                       <div className="about-right">
                           <span>I am a UX/UI designer and <span style={{color:'#ecd662'}}>creative developer</span>  based in calicut, India. 
                            I am a BSC computer science student.
                            <p>

                            I think understanding the human experience is essential for creating useful and effective products that make life easier. I enjoy using my skill-set to empower people to accomplish their goals.
                            My development stack is focused on performance & accessibility with delightful interactions. 
                            I create blazing fast web experience using javascript with the help of Reactjs.
                            </p>
                            </span>
                            <span>
                                <p>

                            Services I offer include:
                                <ul type="disc">
                                    <li>
                            UX/UI design
                                    </li>
                                    <li>
                            Website development
                                    </li>
                                    <li>
                            Graphic design
                                    </li>
                                    <li>
                            Video editing
                                    </li>

                                    <li>
                            Additional services: logo/branding, icons & illustrations

                                    </li>
                                </ul>
                                </p>
                            </span>
                       </div>
                   </div>
               </div>

           </Layout>
            
    )
}

export default about
