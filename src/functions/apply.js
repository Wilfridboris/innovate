import axios from "axios"
export default function apply(values) {
  return {
      sendApplication(){
          let bodyFormData=new FormData();
          bodyFormData.append('name',values.name);
          bodyFormData.append('lastname',values.lastname);
          bodyFormData.append('email',values.email);
          bodyFormData.append('tel',values.tel);
          bodyFormData.append('file',values.file);
    
          const header= {
            'Content-Type': 'multipart/form-data'
          }
          return new Promise(async(res,reject)=>{
            try{
      
                const response= await axios({
                    method: "POST",
                    url: "https://legrowtechapi.herokuapp.com/postulants",
                    data:bodyFormData,
                    headers:header
                  });
                  res(response.data);
        
                 
                
        
              }catch(err){
                reject(err.message);
                console.log(values);
          
                
               
                
              }
          })
      }
  }
}
