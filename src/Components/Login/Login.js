import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="Login">
            <div className="login-content">
                <div className="signup-text">
                    <h1>Login</h1>
                    <h2>Are you a new member ? <a href="/">Sign Up Here</a></h2>
                </div>
                <form className="signup-form">
                    <div className="form-group">
                        <div className="label email">
                            <label for="email">Email</label>
                        </div>
                        <div className="input">
                            <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label">
                            <label for="password">Password</label>
                        </div>
                        <div className="input">
                            <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="submit" className="login-submit">Login</button>
                        <button type="reset" className="login-reset">Reset</button>
                    </div>

                </form>
                <div className="forgot-password">
                    <a href="/"><h2>Forgot your password?</h2></a>
                </div>

            </div>
        </div>
    )
}

export default Login