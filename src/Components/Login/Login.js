import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../useAuth';

import './login.css'

const Login = () => {


    const { signInUsingGoogle } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirect_uri = location.state?.from || "/home";

        const handleGoogleLogin = () => {
          signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
          });
        };
    return (
      <div className="login-container">
        <div>
          <p>Please Log-In or Register First</p>
          <button
            onClick={handleGoogleLogin}
            className="btn"
            style={{ backgroundColor: "#00a99d", color: "white" }}
          >
            Sign In with Google
          </button>
        </div>
      </div>
    );
};

export default Login;