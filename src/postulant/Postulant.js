import axios from "axios"
export default function Postulant(){

return {
    
    
    getPostulant(){
        return new Promise(async(res,reject)=>{
            try{
      
              const response= await axios({
                  method: "GET",
                  url: "https://api.legrowtech.com/postulants",
                });
                res(response.data)
      
            }catch(err){
              reject(err.message)
              
            }
               
          })
    }

}
}