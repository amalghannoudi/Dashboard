import React from 'react'
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const SignUp = () => {
    const navigate=useNavigate();

    const TosignIn=()=>{
     navigate("/login");
    }
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
async function register(){
let item={name,email,password}
let result =await fetch("http://127.0.0.1:8000/api/addUser",{
    method:'POST', 
    body:JSON.stringify(item),
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }       
})
result = await result.json(); 
localStorage.setItem("user_info",JSON.stringify(result));
navigate('/login');
}
  return (
    <div className="body">
<div class="container right-panel-active">
	<div class="container__form container--signup">
		<form action="#" class="form" id="form1">
			<h2 class="form__title">Sign Up</h2>
			<input type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)} class="input" />
			<input type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}class="input" />
			<input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}class="input" />
			<button class="btn" onClick={register}>Sign Up</button>
		</form>
	</div>

	

	<div class="container__overlay">
		<div class="overlay">
			<div class="overlay__panel overlay--left">
				<button class="btn" id="signIn" onClick={TosignIn} >Sign In</button>
			</div>
			
		</div>
	</div>
</div>    </div>
  )
}

export default SignUp
