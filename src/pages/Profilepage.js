import './Pageformat.css';
import LogoutButton from '../LogoutButton'
import { withRouter , useHistory } from "react-router-dom"
import Axios from 'axios'; 
import {useEffect,useState} from 'react'



const Profilepage = () => {

    const history = useHistory();   

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")

    const logOutButtonOnClick = () =>{
        localStorage.removeItem('_id')        
        history.push('/login-authenticator-project/')   
        window.location.reload()     
    }

      const fetchData = async ()=>{
          const id = {id:localStorage.getItem('_id')}
         /*  console.log(id) */
        try{
             Axios.post('https://loginauthenticator-app-server.herokuapp.com/api/get-profile',id)
            .then((response)=>{
                setUsername(response.data.username)
                setFirstName(response.data.firstName)
            })            
            .catch((err)=>console.log(err))             
        }catch(e){
            console.log(e)
        }
    }

    
    useEffect(() => {      
        fetchData()
    }, [])

    /*  console.log() */
    return (
        <div className="background">
            <div className="content">
                <div className="block">
                    <h1>Hi! {`${firstName}`}</h1>
                    <h2>you are logged in as {`${username}`}</h2>
                    <LogoutButton logOutButtonOnClick={logOutButtonOnClick}/>
                </div>
            </div>            
        </div>
    )
}

export default withRouter(Profilepage)
