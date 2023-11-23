import React from 'react'
import './Sign_Up.css'

function Sign_Up() {
    return (
        <div className="SignUp">
            <div className="signup-content">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                    <h2>Already a member ? <a href="/">Login</a></h2>
                </div>
                <form className="signup-form">
                <div className="form-group">
                        <div className="label name">
                            <label for="name">Name</label>
                        </div>
                        <div className="input">
                            <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label phone">
                            <label for="email">Phone</label>
                        </div>
                        <div className="input">
                            <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>
                    </div>
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
            </div>
        </div>
    )
}

export default Sign_Up