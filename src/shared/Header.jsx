import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Header({user, setUser}){

    const navigate = useNavigate();
    const handleLoggingOut = (e) =>  {

    }

    const url = "https://course-project-codesquad-comics-server.onrender.com/logout";

    fetch(`${url}`{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        // it doesn't specify in the directions but I need it needs a body
        body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result); 
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
    })
    .catch((error) => {
        console.log(error); 
        navigate("/admin")
    });


    return(
        
        <header>
            <div className="codesquad-comics-header-logo">
                <a href="#">
                    <img className="nav-comic-icon" src="./images/CodeSquad-Comics-logo.jpg" alt="four books followed by the title CodeSquad Comics"/>
                </a> 
            </div>

            <nav className="navbar-container">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">LOGIN</a>
            </nav>  
            <div className="hamburger-container">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
            
    )
};

export default Header;