import { Component } from "react";
import validator from "./ValidatorApply";
import FormApply from "./FormApply";
import apply from "./functions/apply";
export default class useFormApply extends Component{
    constructor(props){
        super(props)
        this.state={
            values:{
                name:'',
                lastname:'',
                email:'',
                tel:'',
                file:null,
            },
           
            errors:{},
            isSubmit:false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleFile=this.handleFile.bind(this)
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
    handleFile(e){
        let file=e.target.files[0]
        this.setState({
          values:{
            ...this.state.values,
            file:file
          }
        })
    }

   async handleSubmit(e){
         e.preventDefault();
         
         await this.setState({
             errors:validator(this.state.values)
         })
         if(Object.keys(this.state.errors).length === 0){
          
       
             const {sendApplication}=apply(this.state.values,this.setState);
             sendApplication().then(()=>{
                this.setState({
                    ...this.state,isSubmit:true
                     });
             },(err)=>{
                 console.log(err);
             })
         }
      

    }
 
    render(){
        return(
            <>
                  {
                      this.state.isSubmit?(
                        <div>
                            <p>thank you successfully submit you application an agent will call you shortly </p>
                            <p>thank you </p>
                            
                        </div>
                      ):(
                        <FormApply
                        handleChange={this.handleChange}
                        values={this.state.values}
                        handleSubmit={this.handleSubmit}
                        errors={this.state.errors}
                        handleFile={this.handleFile}
                      
                      />
                      )
                  }

            </>
        )
    }
}