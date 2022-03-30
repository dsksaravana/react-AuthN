import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { setUserSession, getToken } from '../utils/common';

function SignUP() {
    const [loading, setLoading] = useState(false);
    const [success, setsuccess] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const confirmpassword = useFormInput('');
    const mail = useFormInput('');
    const mobile = useFormInput('');
    const role = useFormInput('');
    const [error, setError] = useState(null);

    let navigae = useNavigate();

    const handleSubmit = () => {
        setError(null);
        setLoading(true);
        axios.post('https://dev-breview.poorvika.com/api/user/register',
            {
                userName: username.value,
                mobileNumber: parseInt(mobile.value),
                email: mail.value,
                password: confirmpassword.value,
                role: 'user'
            }).then(response => {
                setLoading(false);
                console.log(response.data);
                if (response.data.message == 'success')
                    setsuccess(true);
                else setError(response.data.message);
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

    const navigatetosignin = () => {
        navigae('/sign-in')
    }

    if (success) {
        return (
            <div>
                <h4>User Successfully Created.</h4>
                <h4>Sign IN to continue...</h4>
                <br /><br />
                <button type="submit" className="btn btn-dark btn-block col-12" onClick={navigatetosignin}>Sign IN</button>
            </div>
        );
    }

    return (
        <form>

            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" {...username} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter email" {...mail} />
            </div>
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" className="form-control" placeholder="Enter Mobile Number" {...mobile} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" {...password} />
            </div>
            <div className="form-group">
                <label>Re-enter Password</label>
                <input type="password" className="form-control" placeholder="Enter password" {...confirmpassword} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <button type="submit" className="btn btn-dark btn-block col-12" value={loading ? 'Loading...' : 'SignUp'} onClick={handleSubmit} disabled={loading}>Sign up</button>
            <hr className="mt10"></hr>
            <p className="forgot-password text-center">
                Don't Have acoount <a href="/sign-in">Sign In</a>
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

export default SignUP;