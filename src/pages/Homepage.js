import './Pageformat.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'



const Homepage = () => {

    const [users, setUsers] = useState(0)
    const [loading , setLoading ] =useState(false)

    const fetchData = async ()=>{
        try{
            await Axios.get('https://loginauthenticator-app-server.herokuapp.com/api/fetch-users')
                .then((response)=>setUsers(response.data))   
                .catch((err)=>console.log(err)) 
            setLoading(true)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    return (
        <div className="background">
            <div className="content">
                <div className="block center-text">
                    <h1>Welcome to Fakebook</h1>
                    <h3>Users registered: {loading?`${users.length}`:`Loading...`}</h3>
                </div>
            </div>            
        </div>
    )
}

export default Homepage
