
import  Link  from 'next/link';
import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import FieldData from './fieldData.json'

function Register() {

    const [state, setState] = useState({ name: "", email: "", password: "" })

    const dispatch = useDispatch();

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    const registerHandler = (event) => {

        if (state.name === "" || state.password === "" || state.email === "") {
            event.preventDefault();
            if (state.name === "") alert("نام را به درستی وارد کنید")
            else if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else {
            dispatch(setAuthenticate(true));
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
                <div className="text-right">
                    <div>
                        <img className="h-8 w-auto" src="/images/register.svg" alt="register" />
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">ثبت نام</h2>
                    </div>
                </div>
                <form className=" p-2">
                    {
                        FieldData.map((item, index) => (
                            <div className="my-4" key={index}>
                                <label htmlFor={item.id} className="">{item.descreption}</label>
                                <input id={item.id} name={item.name} type={item.type} required placeholder={item.descreption}
                                    className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    onChange={setValueInput.bind(null, item.name)}
                                />
                            </div>
                        ))
                    }
                    <div className="mx-1 my-4">
                        <Link href="/">
                            <a>
                                <input type="submit" name="submit" value="بازگشت" className="px-3 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300 mx-1" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <input onClick={registerHandler}
                                    type="submit" name="submit" value="ثبت نام" className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1" />
                            </a>
                        </Link>
                    </div>
                </form>
                <Link href="/login"><a><div>قبلا ثبت نام کرده اید</div></a></Link>
            </div>

        </div>

    )
}


export default Register;