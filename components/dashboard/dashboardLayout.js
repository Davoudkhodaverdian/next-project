
import Dashbord from "./dashboard";
import { ToastContainer } from 'react-toastify';

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

export default DashboardLayout;
