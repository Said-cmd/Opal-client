import React from "react";

function Login() {
    return(
    <div className="login-holder">
    <form className="login-form">
        <input 
        type="text"
        name="username"
        placeholder="Email address" 
        />
        <input 
        type="text"
        name="password" 
        placeholder="Password"
        />
        <button type="submit">
            Login
        </button>
    </form>
    </div>
    )
}

export default Login;