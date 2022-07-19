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
            <div className="md:flex flex-row w-[calc(100%-16px)]  md:max-w-[1000px] rounded shadow-lg p-4 bg-white  mx-2">
                <div className='w-full'>
                    <div className='flex'>
                        <div className='flex  items-center'><img src="/images/logo.svg" width={50} alt="logo" /></div>
                        <div className='flex  items-center'><img src="/images/nextLogo.svg" width={50} alt="logo" /></div>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ثبت نام</h2>
                    <Form type="register" confirmHandler={checkInputs} setValueInput={setValueInput} loading={loading} />
                    <Link href="/login" ><a className='hover:text-blue-700 transition'><div>قبلا ثبت نام کرده اید</div></a></Link>
                </div>
                <div className='max-w-[500px] md:flex flex-col justify-center items-center hidden'>
                    <img src='./images/undraw_pair_programming_re.svg' />
                </div>
            </div>
        </div>
    )
}

export default Register;