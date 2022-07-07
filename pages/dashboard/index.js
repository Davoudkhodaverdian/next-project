import Dashboard from "../../components/dashboard/dashboard";
import { useSelector } from 'react-redux';
//import Home from ".";

export default function LoginPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);

    return (!authenticate ? <div className="m-2 text-center">ابتدا باید وارد سایت شوید</div> : <Dashboard />)
}
