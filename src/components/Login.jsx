import React, { useContext, useRef, useState, useEffect } from 'react'
import { userAPI } from './apiHandler/API.jsx';
import { useNavigate } from 'react-router-dom/dist';
import { LoginContext } from './LoginContext';
import "../styles/Login.css"



const Login = () => {
    const [allData, setAllData] = useState();
    const formRef = useRef();
    const navigate = useNavigate();

    //GETIING USER DATA FROM API AND FILLED INTO STATE
    useEffect(() => {
        userAPI.get().then((res) => setAllData(res));
    }, []);


    const { username } = useContext(LoginContext)
    if (username) return "Wait a second";

    //SUBMIT HANDLER FOR LOGIN
    const submit = (e) => {
        e.preventDefault()

        const { [0]: username, [1]: password } = formRef.current;

        if (username.value.length <= 0 || password.value.length <= 0) return alert("form must be filled");

        const matchUsername = allData.find((item) => item.username === username.value);
        const matchPassword = matchUsername?.password === password.value;

        //CHECK ACCOOUNT WHETHER THEY REGISTERED OR NOT
        if (matchUsername && matchPassword) {
            localStorage.setItem("unique_id", matchUsername.id);
            localStorage.setItem("username", username.value);
            navigate("/");
            window.location.reload()
        } else {
            alert("account not found")
        }
    }
    return (
        //LOGIN FORM
        <div>
            <form action="" className='form' ref={formRef}>
                <h1 className='title'>Login Form</h1>
                <label htmlFor="username"> </label>
                <input type="text" placeholder='Username' name='username' className='input' />
                <label htmlFor="pass"> </label>
                <input type="password" placeholder='Password' name='pass' className='input' />
                <button onClick={submit} className='button-confirm'>
                    <span></span>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default Login

