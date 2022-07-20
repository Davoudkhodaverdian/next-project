
import Dashbord from "./index";
import { memo } from "react";

function DashboardLayout({ children }) {

    return (
        <div >
            <Dashbord>
                {children}
            </Dashbord>
        </div>
    );
}

export default memo(DashboardLayout);
