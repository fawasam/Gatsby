import React from "react"
const Title = ({title,setActiveIndex,index}) => {
    return (
        <div className='project-item'
        onMouseEnter ={()=> setActiveIndex (index)}
        onMouseLeave ={()=>setActiveIndex(-1)}
        >
            <div className='project-title'>
                <div>{title}</div>
                <div>icon</div>
            </div>      
        </div>
    )
}

export default Title