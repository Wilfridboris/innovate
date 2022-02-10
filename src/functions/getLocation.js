import axios from "axios"
async function getLocation() {
 
  return new Promise(async (res,reject)=>{
    try{
        const response=await axios({
            method:"GET",
            url:"https://ipapi.co/json"
        })
        let countryName=response.data.country_name;
        let countryCode= response.data.country_calling_code;
        let currency=response.data.currency
       
           res({ countryCode,countryName,currency})
       
    
    }catch(err){
        console.log(err)
        reject(err.message);
    }
  })

   
    
}

export default getLocation
