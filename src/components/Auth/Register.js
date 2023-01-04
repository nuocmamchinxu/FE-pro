import './register.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const [isShowPassword, setShowPassword] = useState();
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {

        // validate 

        // submit api
        // if (!isValidEmail) {

        //     toast.error('invalid email')
        //     return;
        // }
        // if (!password) {
        //     toast.error('invalid password')
        //     return;
        // }
        let data = await postRegister(email, password);
        if (data && +data.EC === 0) {
            toast.success(data.EM)
            navigate('/')


            // await props.fetchListUsers();
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }

    }

    return (
        <div className="Register-container">
            <div className='header'>
                <span>don't have account yet ?</span>
                <button className='btn-signup' >Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                anhtu & CB bank
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello boys , let Start Here
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />




                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span className='icons-eye'
                            onClick={() => setShowPassword(false)}>
                            <VscEye />

                        </span>
                        :
                        <span className='icon-eye'
                            onClick={() => setShowPassword(true)}>
                            <VscEyeClosed />
                        </span>

                    }
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div className='form-group'>
                    <label>UserName</label>
                    <input
                        type={"text"}
                        className="form-control"
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Create my Free account</button>

                </div>
                <div>
                    <span onClick={() => { navigate('/') }} className="back text-center"> 	&#60; 	&#60; Go to Home Page</span>
                </div>
            </div>
        </div>
    )
}
export default Register;