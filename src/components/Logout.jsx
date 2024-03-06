import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './LoginContext';
import Loading from './Loading';

const Logout = () => {
    const navigate = useNavigate();

    const { username } = useContext(LoginContext)

    useEffect(() => {
        setTimeout(() => {
            localStorage.clear()
            window.location.reload()
            navigate("/")
        }, 1000)
    }, []);

    if (!username) return "Loading";
    return (
        <Loading item="you will be logged out..." />
    )
}

export default Logout
