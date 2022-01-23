import React,{ Component } from "react";
import validator from "./ValidatorContact";
import sendContact from "./functions/sendContact";
import ContactForm from "./components/ContactForm";
import './styles/contact.css'
import { Helmet } from 'react-helmet'
import ServiceHeader from './components/ServiceHeader'
import Head from './Head'
export default class useContact extends Component{
    constructor(props){
        super(props);
        this.state={
            values:{
                name:'',
                nameOrg:'',
                email:'',
                message:''
            },
            errors:{},
            isLoading:false,
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
            this.setState({
                isLoading:true
            }) 
            const {send}=sendContact(this.state.values)
            send().then(()=>{
                this.setState({
                    isSubmitting:true
                })
            },
            (err)=>{
                console.log(err)
            })
        }
        
    }

    render(){
        return(
            <>
               <Head/>
            <Helmet>
                <title>legrowtech Contact Us</title>
                <meta name="description" content=" Contact legrowtech services " />
            </Helmet>
                <div className="relative">
                    <div className="overlay"></div>
                    <ServiceHeader
                    title="Schedule a Call or Text Us"
                    description="Want to chat with us?We'd love to hear from you"
                    size="small"
                    />
          
          {!this.state.isSubmitting?(
                <ContactForm

                handleChange={this.handleChange}
                values={this.state.values}
                handleSubmit={this.handleSubmit}
                errors={this.state.errors}
                isLoading={this.state.isLoading}
                />
          ):(
              <h3 className="contact-popup"> Thank you an agent will contact you shortly (:</h3>
          )}
                </div>
            </>
        )
    }

}
