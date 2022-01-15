import React from 'react'

export default function ServiceHeader({title, description, size,color}) {
    return (
        <>
        <div  className={`services-header ${size} ${color} `}>
            <h2>{title}</h2>
            <h3>{description}</h3>
        
        </div>
     

        </>
    )


}
