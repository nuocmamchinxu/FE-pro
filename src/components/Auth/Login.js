import './login.scss'
const Login = (props) => {
    return (
        <div className="login-container">
            <div className='header'>
                don't have account yet ?
            </div>
            <div className='title col-4 mx-auto'>
                anhtu &CB bank
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this ?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control'></input>

                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control'></input>

                </div>
                <span>Forgot password ?</span>
                <div>    <button>Login</button></div>
            </div>
        </div>
    )
}
export default Login;