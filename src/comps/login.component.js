import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-block col-12">Sign in</button>
                <hr className="mt10"></hr>
                <p className="forgot-password text-center">
                    Don't Have acoount <a href="/sign-up">Sign Up</a>
                </p>
            </form>
        );
    }
}