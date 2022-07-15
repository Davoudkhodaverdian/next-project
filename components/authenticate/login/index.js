import Link from 'next/link';
import { useState } from 'react';
import Form from './../form';
import useCheckData from './useCheckData';

function Login() {

    const [state, setState] = useState({ email: "", password: "" })
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
    
    // check data from server with loading
    const { loading, checkData } = useCheckData(state);

    const checkInputs = (event) => {

        event.preventDefault();
        if (state.password === "" || state.email === "") {
            if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else checkData();
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ورود</h2>
                <Form type="login" confirmHandler={checkInputs} setValueInput={setValueInput} loading={loading} />
                <Link href="/register"><a><div>قبلا ثبت نام نکرده اید</div></a></Link>
            </div>
        </div>
    )
}

export default Login;