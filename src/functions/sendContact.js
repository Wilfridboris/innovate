import axios from 'axios'

export default function sendContact(values) {
   
    return {
        send(){
                return new Promise(async(res,reject)=>{
                    var data=values
                    const response = await axios({
                        method:"POST",
                        url:"htpp://localhost:8080",
                        data:data
                    })
                    if(response.data.sent){
                        res()
                    }else{
                        reject('something went wrong')
                    }
                })
        }
    }
        
    
}
