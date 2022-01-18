export default function validator(values){
    let errors={};
    if(!values.email){
        errors.email='Email required'
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='Email address is invalid'
    }
    if(!values.name){
        errors.name="Name required"
    }
    if(!values.nameOrg){
        errors.nameOrg="Name required"
    }
}