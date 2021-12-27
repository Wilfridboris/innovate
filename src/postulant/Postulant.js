import axios from "axios"
export default function Postulant(){

return {
    
    
    getPostulant(){
        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  withCredentials: true,
                  url: "http://localhost:8080/postulants",
                });
                res(response.data)
                console.log(response)
      
            }catch(err){
              reject(err.message)
              
            }
               
          })
    }

}
}