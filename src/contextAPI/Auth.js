import { useContext, useState, createContext}  from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const ContextProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null)
    const navigate = useNavigate()

    const login = async(email , password)=>{
        try {
            await axios.post('/login', { email: email, password: password }).then((response) => {
                setUser(JSON.parse(response.data.user).name)
                setToken(response.data.token)

            }).then(() => {
                navigate('/',{replace:true})
                console.log(user)
                console.log(token)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const logout = ()=>{
        setUser(null)
    }

    return <AuthContext.Provider value={{user , login , logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}