import { useState } from "react";
import '../css/styles.scss';
import { Link } from 'react-router-dom';

// Username
// Password
// Remember Me

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    })

    const handleOnChange = (event) => {

        if (event.target.name === 'rememberMe') {
            let copy = { ...formData }
            if (event.target.checked) {
                copy.rememberMe = true
            } else if (!event.target.checked) {
                copy.rememberMe = false
            }
            setFormData(copy)
        } else {
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.value
            }))
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
        {/* <div className="container topmargin32 w-30 mx-auto"> */}

        <div className="card topmargin32 bottom-marg5 container col-md-5 col-xl-3 border-secondary mb-3 p-4 text-white">
                <form>
                    <fieldset className="text-white">
                        <legend className="text-center text-warning">Login</legend>

                        <div className="form-group">
                            <label htmlFor="username" className="form-label mt-4 w-100">Username:
                                <input onChange={handleOnChange} name="username" type="text" className="form-control d-block w-100" id="username" aria-describedby="usernameHelp" placeholder="Username" />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label mt-3 mb-1 w-100">Password:
                                <input onChange={handleOnChange} name="password" type="password" className="form-control d-block w-100" id="password" aria-describedby="passwordHelp" placeholder="Password" />
                            </label>
                        </div>

                        <div className="form-check mt-5">
                            <input onChange={handleOnChange} name="rememberMe" className="form-check-input" type="checkbox" value="remember me" id="rememberMe" />
                            <label className="form-check-label remember-me" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>

                    </fieldset>

                    <button onClick={submitForm} className="btn btn-secondary d-block w-100 mt-2">Login</button>
                </form>

                <div className="postnote">
                    <p className="mb-0 mt-4 text-white"> Don't have an account? <Link className="link d-block text-secondary" to='/register' > Sign-up here</Link></p>
                </div>

            </div>


        {/* </div> */}
            
        </>
    )
}

export default Login;
