import React,{children} from 'react'

export default function Subitem({children}) {
    return (
        <div>
        <li className="subitem"><a href="#">{children}</a></li>
        </div>
    )
}
