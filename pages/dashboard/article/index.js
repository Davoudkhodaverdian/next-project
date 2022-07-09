
import { useRouter } from 'next/router'
import DashboardLayout from '../../../components/dashboard/dashboardLayout'
export default function Article() {

    const router = useRouter()
    const { pid } = router.query

    return (
        <DashboardLayout>
            <div>
                This is article  page {pid ? ("pid is " + pid) : ""}
            </div>
        </DashboardLayout>
    )
}
