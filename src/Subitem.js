import React,{children} from 'react'
import {Link} from 'react-router-dom'

export default function Subitem({children,link}) {
    return (
        
        <li className="subitem"><Link  to={link}>{children}</Link></li>
        
    )
}
