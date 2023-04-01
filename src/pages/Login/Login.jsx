import React from 'react';
import { useNavigate} from "react-router-dom";
import Header from '../Header/Header';
import { useState } from 'react';

const Login = () => {
	const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
	async function login(){
	let item={email,password}
	console.log(item)
	let result =await fetch("http://127.0.0.1:8000/api/login",{
		method:'POST', 
		body:JSON.stringify(item),
		headers:{
			"Content-Type":"application/json",
			"Accept":"application/json"
		}       
});

result = await result.json();
localStorage.setItem("user_info",JSON.stringify(result)); 
navigate("/products");
   }	
const navigate=useNavigate();

    const TosignUp=()=>{
     navigate("/signUp");
    }
  return (
<div>
<Header />

    <div className="body">

  <div class="container left-panel-active">
	

	<div class="container__form container--signin">
		<form action="#" class="form" id="form2">
			<h2 class="form__title">Sign In</h2>
			<input type="text" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}class="input" />
			<input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}class="input" />
            <a class="link">Forgot your password?</a>
			<button class="btn"onClick={login} >Sign In</button>
		</form>
	</div>

	<div class="container__overlay">
		<div class="overlay">
			
			<div class="overlay__panel overlay--right">
				<button class="btn" id="signUp" onClick={TosignUp}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
            </div>
			</div>
  )
}

export default Login
