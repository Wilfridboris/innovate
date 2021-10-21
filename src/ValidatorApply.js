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
 
    if(!values.phone){
        errors.phone='Phone required'
    }
    if(!values.file){
        errors.file='A File  is required'
    }
 
    if(!values.password){
        errors.password='Password is required'
    }else if(values.password.length<6){
        errors.password='Password needs to be 6 characters or more'
    }
    return errors;
}