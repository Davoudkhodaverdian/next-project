import Link from 'next/link';
import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Form from './form';

function Login() {

    const [state, setState] = useState({ email: "", password: "" })
    const dispatch = useDispatch();
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    const enterHandler = (event) => {

        if (state.password === "" || state.email === "") {

            event.preventDefault();
            if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else {
            dispatch(setAuthenticate(true));
        }
    }
 
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
              
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ورود</h2>
                    <Form type="login" confirmHandler={enterHandler} setValueInput={setValueInput} />
                    <Link href="/register"><a><div>قبلا ثبت نام نکرده اید</div></a></Link>
            
            </div>
        </div>
    )
}

export default Login;