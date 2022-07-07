import Register from "../components/authenticate/register";
import { useSelector } from 'react-redux';
//import Home from ".";

export default function RegisterPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);

    return (authenticate ? <div className="m-2 text-center">شما وارد سایت شدید</div> : <Register />)
}
