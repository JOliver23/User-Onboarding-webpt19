import React, {useState, useEffect }  from 'react';
import * as yup from "yup";
import axios from "axios";

function Form() {
    const [user, setUser] = useState([]);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
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
            console.log("valid: ", valid)
            setIsButtonDisabled(!valid)
        })
    }, [formState])

    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                console.log("subresp: ", response);
                setUser(response.data);
                setFormState({
                    name: "",
                    email: "",
                    password: "",
                    terms: ""
                })
            })
            .catch(err => console.log("error: ", err.response));
    };

    const valueChange = e => {
        console.log("input: ", e.target.value)
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e)
        setFormState(newFormData)
    };
    
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name:
                <input id="name" type="name" name="name" placeholder="name" onChange={valueChange} value={formState.name} data-cy="name"/>
            </label>
            <label htmlFor="email">
                Email:
                <input id="email" type="email" name="email" placeholder="email" onChange={valueChange} value={formState.email}/>
            </label>
            <label htmlFor="password">
                Password
                <input id="password" type="password" name="password" placeholder="password" onChange={valueChange} value={formState.password} />
            </label>
            <label htmlFor="terms">
                Do you agree to the terms and conditions?
                <input id="terms" type="checkbox" name="terms" checked={formState.checked} onChange={valueChange} />
            </label>
            <button type="submit" disabled={isButtonDisabled}>Submit!</button>

            <pre>{JSON.stringify(user, null, 2)}</pre>
        </form>
    )
};

export default Form;