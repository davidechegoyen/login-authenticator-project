const LogoutButton = ({logOutButtonOnClick}) => {

    const logOutButtonOnClickHandler = () =>{
        logOutButtonOnClick()
    }

    return ( 
        <button className="btn" onClick={logOutButtonOnClickHandler}>
            Log out
        </button>
    )
}

export default LogoutButton
