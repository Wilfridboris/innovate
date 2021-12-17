import axios from "axios"
export default function Postulant(){

return {
    
    
    getPostulant(){
        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  url: "http://localhost:8000/postulants",
                });
                res(response.data)
      
            }catch(err){
              reject(err.message)
              
            }
               
          })
    }

}
}