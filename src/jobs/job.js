import axios from "axios"

export default function job(id) {
  return {
    getAllJob(){

        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  url: "https://api.legrowtech.com/v1/jobs",
                  //url: "http://localhost:8080/v1/jobs",
                });
                res(response.data)
               
              
      
            }catch(err){
              reject(err.message)
              
            }
               
          })

    },
    getJObDetails(){
        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  url: "https://api.legrowtech.com/v1/jobs/id/"+id,
                  //url: "http://localhost:8080/v1/jobs/"+id,
                 // url: "http://localhost:8080/v1/jobs/id/"+id,
                });
       
                   
            
                res(response.data)
               
            }catch(err){
              reject(err.message)
              
              
            }
               
          })
    },
    getJobProfessions(){
      return new Promise(async(res,reject)=>{
        try{
  
          const response= await axios({
              method: "GET",
              //url: "https://api.legrowtech.com/v1/jobs/"+id,
              //url: "http://localhost:8080/v1/jobs/"+id,
              url: "https://api.legrowtech.com/v1/jobs/professions"
            });
   
               
        
            res(response.data)
           
        }catch(err){
          reject(err.message)
          
          
        }
           
      })
    },
    getJobContracts(){
      return new Promise(async(res,reject)=>{
        try{
  
          const response= await axios({
              method: "GET",
              //url: "https://api.legrowtech.com/v1/jobs/"+id,
              //url: "http://localhost:8080/v1/jobs/"+id,
              url: "https://api.legrowtech.com/v1/jobs/contracts"
            });
   
               
        
            res(response.data)
           
        }catch(err){
          reject(err.message)
          
          
        }
           
      })
    }
    
  }
}
