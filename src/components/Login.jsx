import React from "react";

function Login({user, setUser}){

    const handleLoginFormSubmit = () =>{

    };

    return (         
        <main>
            <div className="div-white-container">
                <h1>LOGIN</h1>
                <div className="div-form-container-center">
                    <form onSubmit={handleLoginFormSubmit}>
                        <div>
                            <label htmlFor="email_address:">Email address:</label>
                            <input type="email" name="email_address" id="email_address" placeholder="Email"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="Password:">Password</label>
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


