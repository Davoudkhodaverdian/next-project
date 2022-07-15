import Link from 'next/link';
import { useState } from 'react';
import Form from './../form';
import useSendData from './useSendData';
function Register() {

    const [state, setState] = useState({ name: "", email: "", password: "" })
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
     
    // send data to server with loading
    const { loading, sendData } = useSendData(state);

    const checkInputs = (event) => {
        event.preventDefault();
        if (state.name === "" || state.password === "" || state.email === "") {
            if (state.name === "") alert("نام را به درستی وارد کنید")
            else if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else sendData();
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ثبت نام</h2>
                <Form type="register" confirmHandler={checkInputs} setValueInput={setValueInput} loading={loading} />
                <Link href="/login"><a><div>قبلا ثبت نام کرده اید</div></a></Link>
            </div>
        </div>
    )
}

export default Register;