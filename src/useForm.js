import {  Component } from "react";
import React from "react";
// import Auth from "./Auth";
import FormSigIn from "./FormSigIn";
import validator from "./Validator";
import Auth from './Auth';
import {Redirect} from 'react-router-dom';
export  default class useForm extends Component{
 
    constructor(props){
        super(props);
        this.state={
            values:{
                email:'',
                password:''
            },
            errors:{},
            isSubmitting:false,
             authed:false,
             loginError:''
            



        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        // this.handleAuth=this.handleAuth.bind(this)
   
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
   async handleSubmit(e){
    e.preventDefault();
         await this.setState({
           errors:validator(this.state.values)
         })
         if(Object.keys(this.state.errors).length === 0){
            const {log,val}=Auth(this.state.values);
            log().then(()=>{
                this.setState({
                    authed:true
                })
            },
            (err)=>{
                console.log(err);
                this.setState({
                    loginError:err
                })
            })
         }
   
       
     
    
        // login().then(()=>{
        //     //window.location.href='/';
        //     console.log('hey')
        // })
        // this.setState({
        //     errors:validator(this.state.values)
        // })
        // this.setState({
        //     isSubmitting:true
        // })
        
        
    
        
    }
    
    componentDidMount(){
        const {checkIfLog}=Auth();
         checkIfLog().then(()=>{
     
            this.setState({
                authed:true
            })
         });
    }
    // async handleAuth(){
    //     this.setState({
    //         isAuth:  await Auth(this.state.values)
    //     })
    //      this.setState({
    //          isSubmitting:false
    //      })
    //     //  console.log(this.state.isAuth);
    // }
    
  

  
      


   
       
    render(){
        

        //const {login}=Auth(this.state.values);
        // if (Object.keys(this.state.errors).length === 0 && this.state.isSubmitting) {
        //     this.handleAuth();
        //   }
        // console.log(this.state.isAuth);
        return (
    
            <>
                
                {!this.state.authed?(<FormSigIn
                handleChange={this.handleChange}
                values={this.state.values}
                handleSubmit={this.handleSubmit}
                errors={this.state.errors}
                loginError={this.state.loginError}
                
                
                />):(
                    <Redirect  to="/dashboard" />
                  
                )}
            
        </>      
        )
    }
    
};
// export function AuthProvider({children}){
//     const form=useForm();
//     return (
//         <AuthContext.Provider value={form}>
//         {children}
//       </AuthContext.Provider>
// );
//     }
// export  default function AuthConsumer(){
//     return React.useContext(AuthContext);
// }
