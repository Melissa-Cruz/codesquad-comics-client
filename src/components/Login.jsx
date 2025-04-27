import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({user, setUser}){
// function Login(){
    const navigate = useNavigate();

    const handleLoginFormSubmit = (e) =>{
        e.preventDefault();

        const body = {
            username: e.target.username.value, 
            password: e.target.password.value
        }
        const url = "https://course-project-codesquad-comics-server.onrender.com/login/local";

        fetch(`${url}`, {
            method:"POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                console.log("success the Logi");
                localStorage.setItem("user", JSON.stringify(result.data));
                setUser(result.data);
                navigate("/admin");
            })
            .catch((error) => console.log(error));

    };

    return (         
        <main>
            <div className="div-white-container">
                <h1>LOGIN</h1>
                <div className="div-form-container-center">
                    <form onSubmit={handleLoginFormSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" placeholder="username"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <br/>
                        <br/>
                        <div className="div-white-container-form-button">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div> 
        </main>

    )
};

export default Login;


