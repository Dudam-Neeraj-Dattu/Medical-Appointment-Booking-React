import React, { useState } from 'react'
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {

        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(password);

        e.preventDefault();
        // API Call
        // const response = await fetch(`${API_URL}/api/auth/register`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         email: email,
        //         password: password,
        //         phone: phone,
        //     }),
        // });
        // const json = await response.json();
        // if (json.authtoken) {
        //     sessionStorage.setItem("auth-token", json.authtoken);
        //     sessionStorage.setItem("name", name);
        //     // phone and email
        //     sessionStorage.setItem("phone", phone);
        //     sessionStorage.setItem("email", email);
        //     sessionStorage.setItem("password", password);
        //     // Redirect to home page
        //     navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
        //     window.location.reload();
        // } else {
        //     if (json.errors) {
        //         for (const error of json.errors) {
        //             setShowerr(error.msg);
        //         }
        //     } else {
        //         setShowerr(json.error);
        //     }
        // }

    };

    const reset = () => {
        document.getElementsByTagName("input").value = "";
        setEmail("");
        setName("");
        setPassword("");
        setPhone("");
    }

    return (
        <div className="SignUp">
            <div className="signup-content">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                    <h2>Already a member ? <a href="/Login">Login</a></h2>
                </div>
                <form className="signup-form" method='post' onSubmit={register}>
                    <div className="form-group">
                        <div className="label name">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                required className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label phone">
                            <label htmlFor="email">Phone</label>
                        </div>
                        <div className="input">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                // pattern="[0-9]{10}"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label email">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId" />
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="submit" className="login-submit">Sign Up</button>
                        <button type="reset" className="login-reset" onClick={reset}>Reset</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Sign_Up