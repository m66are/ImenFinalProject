import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
function Signup() {
 const [user, setuser] = useState({
   username:"",
   email:"",
   password:""
 })

const history=useHistory()

 const [err, seterr] = useState("")
 const handleSignin=async()=>{
    try {
      let result=await axios.post("http://localhost:8080/auth/signup",user).then(res=>console.log(res.data))
       history.push("/")
    } catch (error) {
     console.log(error.response.data)  
    }
 }

  return (
    <div>
      <h1 className="signup">Sign Up</h1>
      <div style={{
        margin : "100px",
        display : "flex",
        justifyContent : "center",
        alignItems: "center"
      }}>
              <input type='text' placeholder='Username' onChange={(e)=>setuser({...user,username:e.target.value})}/>

      <input type='text' placeholder='Email' onChange={(e)=>setuser({...user,email:e.target.value})}/>
      <input type='password' placeholder='password' onChange={(e)=>setuser({...user,password:e.target.value})}/>
      <button onClick={handleSignin}>Click here</button>

      </div>
    
      
    





    </div>
  );
}

export default Signup;