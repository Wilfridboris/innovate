import { Component } from "react";
import validator from "./ValidatorApply";
import FormApply from "./FormApply";
import apply from "./functions/apply";
import job from './jobs/job'
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
            isSubmit:false,
            jb:{},
            error:false,
            id:props.match.params.id
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleFile=this.handleFile.bind(this)
        this.getJobDetail=this.getJobDetail.bind(this)
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
  getJobDetail(){
        const {getJObDetails}=job(this.state.id);
        getJObDetails().then((res)=>{
         
            this.setState({
                jb:res[0]
            })
          

        },(err)=>{
            console.log(err);
           this.setState({
               error:true
           })
           
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
    componentDidMount(){
        this.getJobDetail();
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
                        jb={this.state.jb}
                      
                      />
                      )
                  }

            </>
        )
    }
}