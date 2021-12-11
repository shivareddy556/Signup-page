import { useState, useEffect } from "react";
import './Login.css';
function Loginpage() {
    const intialvalues = { email: "", password: "" }
    const [formValues, setFormValues] = useState(intialvalues)
    const [formErrors, setFormErrors] = useState({})
    const [issubmit, setIssubmit] = useState(false)

    const handlechange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value });
        setIssubmit(false)
    }
    const submithandler = (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues))
        console.log(formValues)

        setFormValues({ email: "", password: "" });
        if (formValues.email !== "" && formValues.password !== "") {
            alert("formsubmitted successful")
        }
        else {
            alert("Please fill the all feilds")
        }

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && issubmit) {
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = ""
        }
        else if (regex.test(values.email)) {
            errors.email = ""
        }

        if (!values.password) {
            errors.password = ""
        }
        else if (values.password > 8) {
            errors.password = "password must contain 4 char!!"
        }
        else if (values.password < 10) {
            errors.password = "password cannot exceed more than 10 char!!"
        }
        return errors;
    };

    return (
        <div className="center">
            <div className="btnsclass">
                <b>Don't have an account?</b>
                <button className="btns">Signup</button>
            </div>
            <div className="container">
                <h2>Welcome back!</h2>

                {/* <pre>{JSON.stringify(formValues,undefined)}</pre> */}
                <form onSubmit={submithandler}>

                    <label ><b>Email</b></label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder=" Enteremail"
                            value={formValues.email}
                            onChange={handlechange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <label><b>Password</b></label>
                    <div>
                        <input type="password"
                            name="password"
                            autoComplete="off"
                            placeholder="password"
                            value={formValues.password}
                            onChange={handlechange}
                        />

                        <p>{formErrors.password}</p>
                        <div className="box">
                            <input type="checkbox"
                                checked="checked"
                                name="remember"
                            />
                            Remember me
                        </div>
                        <button className="btn" type="submit">Login</button>
                        <div className="paragraph">
                            <p>This site is protected by<a href="#" >Privacy Policy.</a><a href="#">Terms of Service apply</a></p>
                        </div>
                    </div>
                </form>

            </div>
            <div className="psw">
                <span >Forgot Your <a href="#">password?</a></span>
            </div>
            <div className="gbtn">
                <button className="google"><i class="fa fa-google fa-fw">
                </i> Login with Google+

                </button>

            </div>
        </div>

    );
}
export default Loginpage;