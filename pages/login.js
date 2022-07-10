import Login from "../components/authenticate/login";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";


export default function LoginPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);
    const router = useRouter()
    if (authenticate) router.push("/");
    return (<Login />)
}
