import './Pageformat.css'
import './Signuppage.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const Signuppage = () => {

    const history = useHistory();

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstname] = useState(null)
    const [lastName, setLastname] = useState(null)
    const [age, setAge] = useState(0)

    const registerUser = (e)=>{        
        
        const obj = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age
        }       


     Axios.post('https://loginauthenticator-app-server.herokuapp.com/api/create-user',obj)
            .then((response)=>console.log(response.data))
            .then(()=>window.location.reload())   
            .then(()=>history.push('/login-authenticator-project'))
            .catch((err)=>console.log(err.response.data))      
        
    }


    return (
      <div className="background">
            <div className="content">
                <div className="block center-text">
                    <h1 className="center-text">Sign up</h1>
                    <div className="signup-field">
                        <div>
                            <label>Username: </label><input type="text" onChange={(e)=>setUsername(e.currentTarget.value)}></input>
                        </div>
                        <div>
                            <label>Password: </label><input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}></input>
                        </div>
                         <div>
                            <label>First Name: </label><input type="text" onChange={(e)=>setFirstname(e.currentTarget.value)}></input>
                        </div>
                        <div>
                            <label>Last Name: </label><input type="text" onChange={(e)=>setLastname(e.currentTarget.value)}></input>
                        </div>
                         <div>
                            <label>Age: </label><input type="number" onChange={(e)=>setAge(e.currentTarget.value)}></input>
                        </div>    
                                            
                    </div>  
                    <button className="btn center-text" onClick={registerUser}>Sign up</button>
                </div>
            </div>            
        </div>
    )
}

export default Signuppage
