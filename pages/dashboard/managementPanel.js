
import ManagementPanel from "../../components/managementPanel/managementPanel";
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/userListSlice";

export default function ManagementPanelPage({ users }) {

    const dispatch = useDispatch();
    dispatch(setUser(users.data))
    
    return (<ManagementPanel users={users} />)
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
    const users = await res.json()

    // Pass data to the page via props
    return { props: { users } }
}


