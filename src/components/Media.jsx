import React, { useCallback, useLayoutEffect, useState } from 'react'

const getDimensionObject =(node) =>{
    const rect =node.getBoundingClientRect();
    console.log(rect);
    return {
        width: rect.width,
        height: rect.height,
    }
}
const useSize = ()=>{

    const [dimensions,setDimensions] =useState({})
    const [node ,setNode] =useState(null)
    const ref =useCallback(node => {
        setNode(node)
    },[])

    useLayoutEffect (()=> {
        if(node){
            const mesure =()=>setDimensions(getDimensionObject(node))
            mesure();
        }
    },[node])
    return [ref ,dimensions]
}

const Media = ({url ,active ,x ,y}) => {
    // console.log(x,y)

    const [ref, {width ,height}] =useSize();
    return (
        <div>
            <img src={url}
            ref={ref}
            className={active && 'is-active'}
            style={{
                transform: `translate(${x-width/2}px, ${y-height/2}px) scale(1)`
            }}
            alt="img" />
            
        </div>
    )
}

export default Media
