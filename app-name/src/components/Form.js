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
            <button>Submit!</button>
        </form>
    )
};

export default Form;