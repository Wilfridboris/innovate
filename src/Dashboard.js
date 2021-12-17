import React from 'react'
import Auth from './Auth'
import './styles/dashboard.css'
import Postulant from './postulant/Postulant';
import {Redirect} from 'react-router-dom';
 class Dashboard extends React.Component {
     constructor(props){
         super(props);
         this.state={
             user:{},
             userSub:'',
             talent:[],
             url:"http://localhost:8000/postulants/resume/",
             authed:false
         }
         this.getPostulant=this.getPostulant.bind(this)
         this.checkLog=this.checkLog.bind(this)
     }

 ;

     getPostulant(){
        const {getPostulant}=Postulant();
        getPostulant().then((result)=>{
            //console.log(result)
            this.setState({
                talent:result
            })
        },(err)=>{
        
            console.log(err);
          
           
        })
    }
    //const [postulant,setPostulant]=useState([]);

  

         clickSystem(){
            const tags=document.querySelectorAll('[data-tab-target]');
            const tabContents=document.querySelectorAll('[data-tab-content]');
            tags.forEach(tab=>{
                tab.addEventListener('click',()=>{
                    const target=document.querySelector(tab.dataset.tabTarget)
                    tabContents.forEach(tabContents=>{
                        tabContents.classList.remove('dash-active');
                    })
                    tags.forEach(tab=>{
                        tab.classList.remove('dash-active')
                    })
                    tab.classList.add('dash-active');
                    target.classList.add('dash-active');
                })
            })

        }
        checkLog(){
            const {checkIfLog}=Auth();
            checkIfLog().then(()=>{
        
               this.setState({
                   authed:true
               })
            },()=>{
                this.props.history.push('/login');
            });
        }
    
     

        componentDidMount(){
            this.checkLog();
            this.clickSystem();
        

            const {getUserInfos}=Auth();
            getUserInfos().then((user)=>{
                this.setState({
                    user:user
                })
                this.setState({
                    userSub:this.state.user.name.substring(0,2)
                })
                  
            },
            (err)=>{
                
                console.log(err);
           
              
            })

        }
    

  render(){
      
      return(
          <>
        <div >
        <div className="dashboard-header">

            <ul className="dashboard-header-options">
                <li className="dashboard-logo">logo</li>
                    <li className="dashboard-item">
                        <input type="text"/>
                    </li>
                    <li className="dashboard-item">
                        <ul className="dashboard-header-tasks">
                                <li className="tasks-item">notification</li>
                            <li className="tasks-item">parametres</li>
                        </ul>
                    </li>
                  
                    <li className="user-section ">
                    
                      <p>  {this.state.user.name} <span className="user-cerlce">{this.state.userSub}</span></p>
                    </li>
        </ul>
        </div>
        <div className="dashboard-blank">
                <p>Annuler</p>
        </div>
        <div className="dashboard-main">
                <div className="dashboard-logo-item">
                        <p></p>
                </div>
                <div className="dashboard-list-menu">
                    <div className="simple-options">
                        <ul>
                            <li>Prioritaire</li>
                            <li>autres</li>
                        </ul>
                    </div>
                    <div className="main-options">
                        <ul>
                            <li className="options-link dash-active" data-tab-target="#accueil"> Accueil</li>
                            <li className="options-link" data-tab-target="#task"> Taks</li>
                            <li className="options-link"  data-tab-target="#talent" onClick={this.getPostulant}> Talents</li>
                            <li className="options-link" data-tab-target="#message"> messages</li>
                            <li className="options-link" data-tab-target="#job"> jobs</li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard-ecran-menu">
                        <div data-tab-content id="accueil">
                                <p>accueil</p>
                               
                        </div>
                        <div className="ecran" data-tab-content id="talent">
                            <ul className="talent-lists">
                                    {
                                        this.state.talent.map(talent=>{
                                            return (
                                            
                                                <li key={talent.postulant_id}>
                                                    <p><span className="talent-cerlce">{talent.name.substring(0,2).toUpperCase()}</span>{talent.name}</p>
                                                    <p><a href={this.state.url+talent.resume}>{talent.resume}</a>  </p>
                                                </li>
                                            
                        
                                            )
                                        })
                                    }
                            </ul>
                        </div>
                        <div data-tab-content id="message">
                                <p>message</p>
                        </div>
                        <div  data-tab-content id="job">
                                <p>post a job</p>
                        </div>
                        <div  data-tab-content id="task">
                                <p>tasks</p>
                        </div>
                </div>
        </div>

    </div>
    </>
      )
     
  }
}
export default Dashboard
