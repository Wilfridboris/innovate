import axios from "axios";

export default function ILearn() {
    return {
        getCourses(){
            return new Promise(async(resolve,reject)=>{
                try{
                    const response=await axios ({
                        method: "GET",
                        url: "http://localhost:8080/v1/learning/fields",
                    })
                    resolve(response.data.data)
                }catch(err){
                    reject(err.message)
                }
            })
        },
        getSections(fieldCode){
            return new Promise(async(resolve,reject)=>{
                try{
                    const response=await axios ({
                        method: "GET",
                        url: "http://localhost:8080/v1/learning/sections/"+fieldCode,
                    })
                    resolve(response.data.data)
                }catch(err){
                    reject(err.message)
                }
            })
        },
        getAllClips(fieldCode){
            return new Promise(async(resolve,reject)=>{
                try{
                    const response=await axios ({
                        method: "GET",
                        url: "http://localhost:8080/v1/learning/allclips/"+fieldCode,
                    })
                    resolve(response.data.data)
                }catch(err){
                    reject(err.message)
                }
            })
        }
    }
}
