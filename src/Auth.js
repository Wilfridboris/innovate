import axios from "axios";

// const authContext=React.createContext();
 export default function Auth(values){
  //const [authed,setAuthed]=useState(false);
  let val=values

  
 
  
  
  return {
     val, log(){
        return new Promise(async(res,reject)=>{
            var data=values;
            console.log(values);
          
        const response= await axios({
            method: "POST",
            data:data,
    
            withCredentials: true,
            url: "http://localhost:8000/login",
          });
          console.log(response);
          if (response.data.connexion){
              res()
          }else{
            reject('bad login or something went wrong');
          }
        
       
      });
     },checkIfLog(){
         return new Promise(async (res,reject)=>{
            const response= await axios({
                method: "POST",
                withCredentials: true,
                url: "http://localhost:8000/login",
              });
              console.log(response);
              if (response.data.connexion){
                res()
            }else{
                reject('you need to login');
            }
         })
     },logout(){
        
     },getUserInfos(){
         return new Promise(async(res,reject)=>{
            const response= await axios({
                method: "POST",
                withCredentials: true,
                url: "http://localhost:8000/login",
              }); 
              console.log(response);
              if (response.data.connexion){
                res(response.data.user)
            }else{
                reject('could get the user infos');
            }
         })
     }
    }
}

    //   login(){
    //       return new Promise((res,reject)=>{
    //             var data=values;
    //             console.log(values);
              
    //         const response= axios({
    //             method: "POST",
    //             data:data,
        
    //             withCredentials: true,
    //             url: "http://localhost:8000/login",
    //           });
    //           console.log(response);
    //           if (response.data.connexion){
    //               setAuthed(true)
    //               res()
    //           }else{
    //             reject('Error occur');
    //           }
            
           
    //       })
    //   }
 
   
    

// export function AuthProvider({children}){
//     const auth=Auth();
//     return (
//         <authContext.Provider value={auth}>
//         {children}
//       </authContext.Provider>
//     );
// }
// export default function AuthConsumer(){
//     return React.useContext(authContext);
// }