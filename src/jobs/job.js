import axios from "axios"

export default function job(id) {
  return {
    getAllJob(){

        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  url: "https://api.legrowtech.com/v1/jobs",
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
                  url: "https://api.legrowtech.com/v1/jobs/"+id,
                });
       
                   
            
                res(response.data)
               
            }catch(err){
              reject(err.message)
              
              
            }
               
          })
    }
  }
}
