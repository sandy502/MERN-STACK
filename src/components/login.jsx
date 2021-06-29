import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./searchcss.css"

const Login = () => {
  const [userRegistration, setuserRegistration] = useState({
      username: "",
      password: ""

  });
  const [records, setRecords] = useState([]); 

  const handleInput = () => {
      const name = e.target.name;
      const value = e.target.name;

      setuserRegistration({ ...userRegistration, [name]: value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();

      const newRecord = { ...userRegistration}
      setRecords([...records, newRecord])
  }
        return (
          <div className="container" >
            <form className="col" action="">
                <div className="col">
                    <label className="">Username</label>
                    <input type="text" className="" autocomplete="off" value={userRegistration.username} onChange={handleInput} placeholder="Enter username" name="username" />
                </div>
                
                <div className="col">
                    <label className="loginlabel">Password</label>
                    <input type="text" className="logininput" autocomplete="off" value={userRegistration.password} onChange={handleInput} placeholder="Enter password" name="password" />
                </div>
                
                    <div className="col">
                    <input type="checkbox" />
                    <label className="loginlabel" htmlFor="checking">Remember me</label>
                    </div>
                        
  

                <Button type="submit">Sign in</Button>
                    <a href="#">Forgot password?</a>
            </form>
            </div>
        );
}


export default Login;