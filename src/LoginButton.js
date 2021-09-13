
const LoginButton = ({cN,loginButtonOnClick}) => {

    const loginButtonOnClickHandler = ()=>{
        loginButtonOnClick()

       
    }
    return (
        <button className={cN} onClick={loginButtonOnClickHandler}>
            Log in
        </button>
    )
}

export default LoginButton
