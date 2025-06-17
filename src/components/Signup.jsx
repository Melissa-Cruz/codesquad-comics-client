import React, {useEffect, useState} from "react"; 
import { useNavigate } from "react-router-dom";

function Signup({user, setUser}){

    const navigate = useNavigate();

    const handleSignupFormSubmit = (e) =>{
        e.preventDefault();

        const body = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email_address: e.target.email_address.value,
            password: e.target.password.value


        }

              //const url = "https://course-project-codesquad-comics-server.onrender.com/signup";
              const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;

        fetch(`${API_BASE_URL}/auth/register`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
            console.log(result);
            console.log("success for signup");
            localStorage.setItem("user", JSON.stringify(result.data));
            setUser(result.data);
            navigate(`/admin`);
        })
            .catch((error) => console.log(error));
    };

    return (         
        <main>
            <div className="div-white-container">
                <h1>Sign Up</h1>
                <div className="div-form-container-center">
                    <form onSubmit={handleSignupFormSubmit}>
                        <div>
                            <label htmlFor="first_name">First Name:</label>
                            <input type="first_name" name="first_name" id="first_name" placeholder="First Name"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="last_name" name="last_name" id="last_name" placeholder="Last Name"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="email_address">Email address:</label>
                            <input type="email" name="email_address" id="email_address" placeholder="Email"/>
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

export default Signup;