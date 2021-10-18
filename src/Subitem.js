import React,{children} from 'react'
import {Link} from 'react-router-dom'

export default function Subitem({children,link}) {
    return (
        
        <li className="subitem">{children}</li>
        
    )
}
