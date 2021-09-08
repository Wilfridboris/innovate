import React,{children} from 'react'

export default function Subitem({children}) {
    return (
        
        <li className="subitem"><a href="#">{children}</a></li>
        
    )
}
