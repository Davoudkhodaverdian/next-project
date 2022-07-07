import Login from "../components/authenticate/login";
import { useSelector } from 'react-redux';
//import Home from ".";

export default function LoginPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);

    return (authenticate ? <div className="m-2 text-center">شما وارد سایت شدید</div> : <Login />)
}
