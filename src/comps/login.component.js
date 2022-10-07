import React, { useState } from 'react';
import {userHistory} from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        loading: false,
    }

    login = () => {
        this.setState({ loading: true });
        //input.preventDefault();

        console.log(this.state.username, this.state.password)

        axios.post('your url', {
            userName: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                alert('Something went wrong while creating account');
                if (response.data.status === 401) {
                    alert('Something went wrong while creating account');
                    this.setState({
                        showAlert: true
                    });
                } else {
                    alert('Something went wrong while creating account');
                    this.props.history.push("/dash");
                }
            }).catch((response) => {
                // ? Show to user that request is failed
                //this.setState({ errors: [response] })
                this.setState({ loading: false });
                console.log('request failed', response)
            });
    }

    setUserName = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    setPassWord = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" value={this.state.username} onChange={this.setUserName.bind(this)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.setPassWord.bind(this)} />
                </div>

                <button type="submit" onSubmit={this.login} className="btn btn-dark btn-block col-12">Sign in</button>
                <hr className="mt10"></hr>
                <p className="forgot-password text-center">
                    Don't Have acoount <a href="/sign-up">Sign Up</a>
                </p>
            </form>
        );
    }
}
