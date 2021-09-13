import './Pageformat.css'
import './Loginpage.css'
import { useState } from 'react'
import LoginButton from '../LoginButton'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

const Loginpage = () => {

    const history = useHistory();

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const loginButtonOnClick = () =>{
        const userLoggingIn = { 
            username : username, 
            password : password
        }
        Axios.post('http://localhost:5000/api/login',userLoggingIn)
                .then((response)=>localStorage.setItem('_id',response.data))
                .then(()=>window.location.reload())                
                .catch((err)=>console.log(err.response.data))

        //for now mag reredirect sya lagi, but later it would still go through validate
        history.push("/login-authenticator-project")        
    }


    return (
        <div className="background">
            <div className="content">
                <div className="block">
                    <h1 className="center-text">Login</h1>
                    <div className="login-field">
                        <div>
                            <label>Username: </label><input type="text" onChange={(e)=>setUserName(e.currentTarget.value)}/>
                        </div>
                        <div>
                            <label>Password: </label><input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}/>
                        </div>
                        <LoginButton cN="btn " loginButtonOnClick={loginButtonOnClick}/>
                        
                    </div>                    
                </div>
            </div>            
        </div>
    )
}

export default Loginpage
