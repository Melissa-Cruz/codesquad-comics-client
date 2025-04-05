function Signup(){
    return (         
        <main>
            <div className="div-white-container">
                <h1>Sign Up</h1>
                <div className="div-form-container-center">
                    <form>
                        <div>
                            <label htmlFor="First Name:">First Name:</label>
                            <input type="first_name" name="first_name" id="first_name" placeholder="First Name"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="Last Name:">Last Name:</label>
                            <input type="last_name" name="last_name" id="last_name" placeholder="Last Name"/>
                        </div>
                        <br/>
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

export default Signup;