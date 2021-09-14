import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { useState , useEffect ,useMemo} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Profilepage from './pages/Profilepage';


function App() {
  
  const [isAuth, setIsAuth] = useState("")

  const checkLogged =useMemo(()=>{
    return isAuth
  },[isAuth])

  useEffect(() => {
    setIsAuth(localStorage.getItem('_id',))
  }, [checkLogged])  

  
  return (
    <Router>
      <Navbar isAuth={checkLogged}/>
      <Switch>
        <Route exact path="/login-authenticator-project">
          <Homepage />
        </Route>
        <Route path="/login_page">
          <Loginpage />
        </Route>
        <Route path="/signup_page">
          <Signuppage />
        </Route>
        <ProtectedRoute path="/profile" component={Profilepage} isAuth={isAuth}/> 
      </Switch>
      
    </Router>
    
  );
}

export default App;
