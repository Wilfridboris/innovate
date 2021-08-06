import React, { children,useState ,useEffect} from 'react'
import {BsGridFill ,BsGrid,BsChevronDown,BsPlus} from "react-icons/bs";


export default function Item({children}) {
    

 
    const [IsSubmenuToggle,setIsSubmenuToggle]= useState(false)
    const [state,setState]=useState({
        mobileView:false
    });
    const {mobileView}=state;
    const displayMobile=()=>{
        return (
            <li className={ IsSubmenuToggle?"item dropdown submenu-active":"item dropdown "} onClick={()=>setIsSubmenuToggle(!IsSubmenuToggle)}><a tabIndex="0">{children}</a><BsChevronDown className="ChevronDown" color="white"/> <BsPlus className="Plus" size="1.5em" color="white"/></li>

        )
    }
    const displayDesktop=()=>{
        return (
            <li className="item dropdown"><a tabIndex="0">{children} <BsChevronDown className="ChevronDown" color="white"/></a> <BsPlus className="Plus" size="1.5em" color="white"/></li>

        )
    }
    useEffect(()=>{

        const setResponsiveness=()=>{
            return window.innerWidth<600?setState((prevState)=>({...prevState,mobileView:true})):setState((prevState)=>({...prevState,mobileView:false}))
        }
        setResponsiveness();
        window.addEventListener("resize",()=>setResponsiveness());

        return()=>{
            window.removeEventListener("resize",()=>setResponsiveness());
        }

    },[])
   
    return (
        <>
            {mobileView?displayMobile():displayDesktop()}
        </>
      
     
     
    )
}
