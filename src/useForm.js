import { useState,useEffect, Component } from "react";
import { IoHandRightSharp, IoTimeSharp } from "react-icons/io5";
import Auth from "./Auth";
import FormSigIn from "./FormSigIn";
import validator from "./Validator";
export default class useForm extends Component{
    constructor(props){
        super(props)
        this.state={
            values:{
                email:'',
                password:''
            },
            errors:{},
            isSubmitting:false,
            isAuth:false
            



        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
   
    }
  


    handleChange(e){
        const {name,value}=e.target;
        this.setState({
          values:{
              ...this.state.values,
              [name]:value
          }
           
        })
    
    };
   handleSubmit(e){
        e.preventDefault();
        this.setState({
            errors:validator(this.state.values)
        })
        this.setState({
            isSubmitting:true
        })
       
       
          
        
    
    }


  
      


   
       
    render(){
        if (Object.keys(this.state.errors).length === 0 && this.state.isSubmitting) {
           this.setState({
               isAuth: Auth(this.state.values)
           })
            this.setState({
                isSubmitting:false
            })
          }
        
        return (
            <>
            {!this.state.isAuth?(
                <FormSigIn
                handleChange={this.handleChange}
                values={this.state.values}
                handleSubmit={this.handleSubmit}
                errors={this.state.errors}
                
                
                />
            ):(
                <div>connected</div>
            )}
        </>      
        )
    }
    
};
