
import Dashbord from "./dashboard";
import { ToastContainer } from 'react-toastify';
import { memo } from "react";

function DashboardLayout({ children }) {

    return (
        <div>
            <Dashbord>
                {children}
                <ToastContainer />
            </Dashbord>
        </div>
    );
}

export default memo(DashboardLayout);
