

import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/userListSlice";
import PropTypes from 'prop-types';
import LoadingPage from '../../components/loading/loadingPage';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
const ManagementPanel = dynamic(() => import("../../components/managementPanel/managementPanel.js"), { suspense: true });

export default function ManagementPanelPage() { //{ users } argumunt commented request, use useEffect instead of it


    const user = useSelector((state) => state.user.list)
    const dispatch = useDispatch();

    const getUsers = async () => {

        // Fetch data from external API
        const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
        const data = await res.json()
        dispatch(setUser(data.data));

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Suspense fallback={<LoadingPage />}>
            <ManagementPanel users={user} />
        </Suspense>
    )
}

// This gets called on every request
// export async function getServerSideProps() {

//     // Fetch data from external API
//     const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
//     const users = await res.json()

//     // Pass data to the page via props
//     return { props: { users } }
// }

ManagementPanelPage.prototype = {
    users: PropTypes.object
}
