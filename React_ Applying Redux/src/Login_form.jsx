import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const Login_form = () => {
    const { theme, handleOnClick } = useContext(ThemeContext)
    return (
        <div>
            <div className={`${theme === "light" ? "form-container" : "form-container2"}`}>
                <i onClick={handleOnClick} className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}>{theme}</i>
                <p className="title">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button className="sign">Sign in</button>
                </form>

                <p className="signup mt-2">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className>Sign up</a>
                </p>
            </div>

        </div>
    )
}

export default Login_form
