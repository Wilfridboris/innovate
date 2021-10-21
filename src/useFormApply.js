import { Component } from "react";
import validator from "./ValidatorApply";
import FormApply from "./FormApply";
export default class useFormApply extends Component{
    constructor(props){
        super(props)
        this.state={
            values:{
                name:'',
                lastname:'',
                email:'',
                phone:'',
                motivation:'',
                file:''
            },
            errors:{},
            isSubmitting:false,
            isAuth:false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    };

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
        return(
            <>
                    <FormApply
                      handleChange={this.handleChange}
                      values={this.state.values}
                      handleSubmit={this.handleSubmit}
                      errors={this.state.errors}
                    
                    />

            </>
        )
    }
}