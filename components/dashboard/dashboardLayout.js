
import Dashbord from "./dashboard";
import { ToastContainer } from 'react-toastify';
import { memo } from "react";

function DashboardLayout({ children }) {

    return (
        <div >
            <Dashbord>
                {children}
                <div className='text-center'>Footer</div>
                <ToastContainer />
            </Dashbord>
        </div>
    );
}

export default memo(DashboardLayout);
