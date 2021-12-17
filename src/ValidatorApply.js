export default function validator(values){
    let errors={};
    if(!values.name){
        errors.name='Name required'
    }
    if(!values.lastname){
        errors.lastname='Lastname required'
    }
    if(!values.email){
        errors.email='Email required'
    }  else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='Email address is invalid'
    }
 
    if(!values.tel){
        errors.phone='Phone required'
    }
    if(!values.file){
        errors.file='A File  is required'
    }
 

    return errors;
}