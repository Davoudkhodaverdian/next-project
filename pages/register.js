import Register from "../components/authenticate/register";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
//import Home from ".";

export default function RegisterPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);
    const router = useRouter()

    if (authenticate) router.push("/");
    
    return (<Register />)
}
