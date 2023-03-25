import React from 'react';
import { useNavigate } from "react-router-dom";

  
const Login = () => {
    const navigate=useNavigate();

    const TosignUp=()=>{
     navigate("/signUp");
    }
  return (
    <div className="body">
  <div class="container left-panel-active">
	

	<div class="container__form container--signin">
		<form action="#" class="form" id="form2">
			<h2 class="form__title">Sign In</h2>
			<input type="email" placeholder="Email" class="input" />
			<input type="password" placeholder="Password" class="input" />
            <a class="link">Forgot your password?</a>
			<button class="btn" >Sign In</button>
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
  )
}

export default Login
