import { useState } from "react";
import '../css/styles.scss';
import { Link } from "react-router-dom";


const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
    })

    const handleOnChange = (event) => {

        if (event.target.name === 'techstack') {
            let copy = { ...formData }

            if (event.target.checked) {
                copy.techstack.push(event.target.value)
            } else {
                copy.techstack = copy.techstack.filter(el => el !== event.target.value)
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
        <div className="card topmargin32 bottom-marg5 container col-md-5 col-xl-3 border-warning mb-3 p-4 text-white">
            <form>
                <fieldset>
                    <legend className="text-center text-warning">Register</legend>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label mt-4 w-100">Name:
                            <input onChange={handleOnChange} name="name" type="text" className="form-control d-block w-100" id="name" aria-describedby="nameHelp" placeholder="Name" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" className="form-label mt-4 w-100">Username:
                            <input onChange={handleOnChange} name="username" type="text" className="form-control d-block w-100" id="username" aria-describedby="usernameHelp" placeholder="Username" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label mt-4 w-100">Password:
                            <input onChange={handleOnChange} name="password" type="text" className="form-control d-block w-100" id="password" aria-describedby="passwordHelp" placeholder="Password" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label mt-4 w-100">Confirm Password:
                            <input onChange={handleOnChange} name="confirmPassword" type="text" className="form-control d-block w-100" id="confirmPassword" aria-describedby="passwordHelp" placeholder="Password" />
                        </label>
                    </div>


                </fieldset>


                <button onClick={submitForm} className="btn btn-secondary d-block w-100 mt-4">Sign-up</button>
            </form>
            <div className="postnote">
                <p className="mb-0 mt-4 ">Already a member? <Link to='/login' className="link d-block text-secondary">Login here</Link></p>
            </div>
        </div>
    )
}

export default Register;