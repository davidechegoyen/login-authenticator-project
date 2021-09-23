import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({isAuth}) => {

    

    return (
        <div className="navigationbar">
            <div className="navigationbar-content">
                <ul className="navigation-list">
                    <Link to="/"><li className="icon">FakeB</li></Link>
                    {isAuth?<Link to="/profile"><li>profile</li></Link>:<Link to="/login_page"><li>login</li></Link>}
                    {isAuth?"":<Link to="/signup_page"><li>Sign up</li></Link>}
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
