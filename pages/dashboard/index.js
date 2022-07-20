import Dashboard from "../../components/dashboard";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";

export default function DashboardPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);
    const router = useRouter()
    if (!authenticate) router.push("/");
    return (<Dashboard />)
    
}
