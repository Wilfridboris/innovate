import axios from "axios";
export default async function Auth(values){
  
    try{
        var data=JSON.stringify(values)
    var  headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'    

      }
      
     const response= await axios.post('http://localhost:8000/login', data, {
          headers: headers
        })
     
        console.log(JSON.stringify(response.data))
        return response.data.connexion
    }catch(e){
        console.log(e)
    }
   
    
}