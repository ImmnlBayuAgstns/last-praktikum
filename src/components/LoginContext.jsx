import { useState, useEffect, createContext } from "react";
import { userAPI } from "./apiHandler/API.jsx";

const LoginContexts = createContext();

const LoginProvider = ({ children }) => {
    const [islogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [uniqueId, setUniqueId] = useState("")

    //CHECK CREDENTIAL AND MAKE IT INTO CONTEXT
    useEffect(() => {
        const checkCredential = async () => {
            const uniqueId = localStorage.getItem("unique_id")
            const username = localStorage.getItem("username")

            if (!uniqueId && !username) return;

            const userData = await userAPI.find(uniqueId)
            if (uniqueId === userData.data.id && username === userData.data.username) {
                setUsername(username);;
                setUniqueId(uniqueId)
                setIsLogin(true);
            } else {
                setUniqueId("")
                setUsername("")
                setIsLogin(false)
            }
        }
        checkCredential()
    }, [])

    //PROVIDE CONTEXT TO OTHER COMPONENTS
    return <LoginContexts.Provider value={{ islogin, uniqueId, username }}>{children}</LoginContexts.Provider>
}

export const LoginContext = LoginContexts;
export default LoginProvider;