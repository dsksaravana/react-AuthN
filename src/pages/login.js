import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setUserSession, getToken } from '../utils/common';

function Login() {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    let navigae = useNavigate();
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('Your URL', { userName: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.data._id, response.data.data);
            navigae('/dash');
        }).catch(error => {
            setLoading(false);
            console.log(error);
            if (error.response.statusCode === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    const token = getToken();

    useEffect(() => {
        if (token) {
            navigae('/dash');
        }
    })

    return (
        <form>

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter email" {...username} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" {...password} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <button type="submit" className="btn btn-dark btn-block col-12" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>Sign in</button>
            <hr className="mt10"></hr>
            <p className="forgot-password text-center">
                Don't Have acoount <a href="/sign-up">Sign Up</a>
            </p>
        </form>



    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;
