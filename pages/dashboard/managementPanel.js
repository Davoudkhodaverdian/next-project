

import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/userListSlice";
import React, { Suspense } from "react";
import LoadingPage from '../../components/loading/loadingPage';

const ManagementPanel = React.lazy(() => import("../../components/managementPanel/managementPanel.js"));

export default function ManagementPanelPage({ users }) {

    const dispatch = useDispatch();
    dispatch(setUser(users.data))

    return (
        <Suspense fallback={<LoadingPage />}>
            <ManagementPanel users={users} />
        </Suspense>
    )
}
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    setTimeout(() => {



    }, 3000)
    const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
    const users = await res.json()

    // Pass data to the page via props
    return { props: { users } }
}


