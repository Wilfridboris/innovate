import React,{ Component } from "react";
import validator from "./ValidatorContact";
export default class useContact extends Component{
    contructor(props){
        super(props);
        this.state={
            values:{
                name:'',
                nameOrg:'',
                email:'',
                message:''
            },
            errors:{},
            isSubmitting:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        const {name,value}=e.target
        this.setState({
            values:{
                ...this.state.values,
                [name]:value
            }
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        await this.setState({
            errors:validator(this.state.values)
        })
        if(Object.keys(this.state.errors).length===0){

        }
        
    }
}
