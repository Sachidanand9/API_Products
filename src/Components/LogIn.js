import "../Assets/css/LogIn.css"
import { useState } from 'react';
import PropTypes  from "prop-types";
import { useNavigate } from "react-router-dom";
import { openNotify } from '../Noty';


async function loginUser(credentials) {
  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function LogIn({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
      navigate('/home');
      openNotify(
        'success',
        'You are Logged In',
        'Welcome To Home Page'
      )
  };
  return (
    
    <div className="Auth-form-container">
            <div style={{margin:'70px'}}>
        <h6>
          You Can LogIn Using this
        </h6>
        <p>
         username: mor_2314
        </p>
        <p>
          Pssword: 83r5^_
        </p>
      </div>
    <form onSubmit={handleSubmit} className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Log In</h3>
        <div className="form-group mt-3">
          <label>User Name</label>
          <input required onChange={e => setUserName(e.target.value)}
            type="text"
            className="form-control mt-1"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input required onChange={e => setPassword(e.target.value)}
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button style={{backgroundColor:"#1877f2"}} type="submit" className="btn btn-primary btn-block">
            LogIn
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default LogIn;
  
