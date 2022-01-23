import axios from 'axios'

export default function sendContact(values) {
   
    return {
        send(){
                return new Promise(async(res,reject)=>{
                    var data=values
                    const response = await axios({
                        method:"POST",
                        data:data,
                        url:"https://api.legrowtech.com/v1/mail",
                        
                    })
                    console.log(response)
                    if(response.status===201){
                        res()
                    }else{
                        reject('something went wrong')
                    }
                })
        }
    }
        
    
}
