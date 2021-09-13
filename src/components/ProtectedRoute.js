import { Route, Redirect } from 'react-router-dom'
import Profilepage from '../pages/Profilepage'

const ProtectedRoute = ({isAuth, component, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>{
            if(isAuth){
                return <Profilepage></Profilepage>
            }   
            else{
                return <Redirect to={ { pathname:"/login-authenticator-project", state:{from:props.location} } }/>
            }
        }}/>
    )
}

export default ProtectedRoute
