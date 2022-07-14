

import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/userListSlice";
import PropTypes from 'prop-types';
import LoadingPage from '../../components/loading/loadingPage';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ManagementPanel = dynamic(() => import("../../components/managementPanel/managementPanel.js"), { suspense: true });

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
    const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
    const users = await res.json()

    // Pass data to the page via props
    return { props: { users } }
}

ManagementPanelPage.prototype = {
    users: PropTypes.object
}
