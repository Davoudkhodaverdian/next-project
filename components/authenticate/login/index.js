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
        <div className="md:flex flex-row w-[calc(100%-16px)]  md:max-w-[1000px] rounded shadow-lg p-4 bg-white  mx-2">
            <div className='w-full'>
                <div className='flex'>
                    <div className='flex  items-center'><img src="/images/logo.svg" width={50} alt="logo" /></div>
                    <div className='flex  items-center'><img src="/images/nextLogo.svg" width={50} alt="logo" /></div>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ورود</h2>
                <Form type="login" confirmHandler={checkInputs} setValueInput={setValueInput} loading={loading} />
                <Link href="/register"><a className='hover:text-blue-700 transition'><div>قبلا ثبت نام نکرده اید</div></a></Link>
            </div>
            <div className='max-w-[500px] md:flex flex-col justify-center items-center hidden'>
                <img src='./images/undraw_professor_re_mj1s.svg' />
            </div>
        </div>
    </div>

    )
}

export default Login;