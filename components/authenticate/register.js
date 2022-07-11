import Link from 'next/link';
import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { setCurrentUser } from "../../store/slices/currentUserSlice"
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Form from './form';
import { toast } from 'react-toastify';
import { addUser } from '../../store/slices/userListSlice';
import { useRouter } from 'next/router';

function Register() {

    const [state, setState] = useState({ name: "", email: "", password: "" })
    const dispatch = useDispatch();
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
    const router = useRouter()
    const checkInputs = async () => {

        let key = Date.now();
        let values = {
            name:state.name, membershipDate: "1401/4/28", title: "-", field: "-", age: "0000",
            workExperience: "lessoneyear", email:state.email, role: "user", userPassword: state.password, password: key.toString()
        }

        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })
            const data = await res.json();
            
            dispatch(addUser(data.data))
            dispatch(setAuthenticate(true));
            dispatch(setCurrentUser(data.data));
            toast(<div className='vazir-matn-font'>شما با موفقیت ثبت نام کردید</div>)
            router.push("/");

        } catch (error) { console.log(error) }

    }

    const registerHandler = (event) => {
        event.preventDefault();
        if (state.name === "" || state.password === "" || state.email === "") {
            if (state.name === "") alert("نام را به درستی وارد کنید")
            else if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else checkInputs();
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ثبت نام</h2>
                <Form type="register" confirmHandler={registerHandler} setValueInput={setValueInput} />
                <Link href="/login"><a><div>قبلا ثبت نام کرده اید</div></a></Link>
            </div>
        </div>
    )
}

export default Register;