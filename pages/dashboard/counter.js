import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import LoadingPage from '../../components/loading/loadingPage';

const Counter = dynamic(() => import("../../components/counter/counter"), { suspense: true });

export default function LoginPage() {

    const authenticate = useSelector((state) => state.authenticate.authenticate);
    const router = useRouter()
    if (!authenticate) router.push("/");

    return (
        <Suspense fallback={<LoadingPage />}>
            <Counter />
        </Suspense>
    )
}
