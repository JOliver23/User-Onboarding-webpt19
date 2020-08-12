import React, {useState, useEffect }  from 'react';
import * as Yup from "yup";

function Form() {
    const [user, setUser] = useState([]);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        reason: "",
        terms: ""
    });

    const[isButtonDisabled, setIsButtonDisabled] = useState(true)

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a req. field"),
        email: yup.string().email("Must be a valid email address").required(),
        terms: yup.boolean().oneOf([true], "Please agree to Terms & Conditions"),
        password: yup.string().required("password required")
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: ""  })
            })
            .catch(err => {
                console.log("error: ", err)
                setErrors({ ...errors, [e.target.name]: err.errors[0]})
            })
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
            setIsButtonDisabled(!valid)
        })
    }, [formState])
    
    return (
        <form>
            <label htmlFor="name">
                Name:
                <input id="name" type="name" name="name" placeholder="name" />
            </label>
            <label htmlFor="email">
                Name:
                <input id="email" type="email" name="email" placeholder="email" />
            </label>
            <label htmlFor="password">
                Password
                <input id="password" type="password" name="password" placeholder="Password" />
            </label>
            <label htmlFor="terms">
                Do you agree to the terms and conditions?
                <input id="terms" type="radio" name="terms" />
            </label>
            <button type="submit" disabled={isButtonDisabled}>Submit!</button>
        </form>
    )
};

export default Form;