import { useState,useEffect } from "react";
const useForm =(validator)=>{
    const [values,setValues]=useState({
        email:'',
        password:''

    });

    const [errors,setErrors]=useState({});
    const handleChange=e=>{
        const {name,value}=e.target;
        setValues({
            ...value,
            [name]:value
        });
    
    };
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validator(values))
    }
    return {handleChange,values,handleSubmit,errors};
};
export default useForm;