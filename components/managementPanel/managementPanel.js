import DashboardLayout from "../dashboard/dashboardLayout";
import UserList from "../userList/userList";


export default function ManagementPanel() {

    return (
        <DashboardLayout>
            <div>managementPanel</div>
            <UserList/>
        </DashboardLayout>
    )
}
