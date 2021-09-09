import React, { useState ,useEffect} from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function DivItem({children}) {
    const [IsSubmenuToggle,setIsSubmenuToggle]= useState(false)
    return (
        
        <li className={IsSubmenuToggle?"lb-trigger lb-active":"lb-trigger"} onClick={()=>setIsSubmenuToggle(!IsSubmenuToggle)}>
              <div>
             {children}
              </div>
              < IoIosArrowDown className="ArrowDown" size="1.5em" color="white"/>
        </li>
    )
}
