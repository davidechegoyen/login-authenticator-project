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
        Axios.post('https://loginauthenticator-app-server.herokuapp.com/api/login',userLoggingIn)
                .then((response)=>localStorage.setItem('_id',response.data))
                .then(()=>{                    
                    history.push("/") 
                    window.location.reload()
                })                
                .catch((err)=>alert(err.response.data))

        //for now mag reredirect sya lagi, but later it would still go through validate
               
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
