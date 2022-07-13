


import Header from './header';
import { memo, useState } from 'react';
import MenubarDynamic from './menubar/menubarDynamic'
import Modal from './../userList/modal/modal'
import { useSelector } from "react-redux";

function Dashbord({ children }) {

    const [sidebar, setSidebar] = useState(false);
    const sendSidebarState = (show) => { setSidebar(show) }
    const show = useSelector(state => state.showModal.show);

    return (
        <div className='pr-0 sm:flex flex-row overflow-hidden '>
            <div className="flex flex-col w-full  md:pr-48">
                <Header sendSidebarState={sendSidebarState} sidebar={sidebar} />
                <div className="w-full max-w-7xl mx-auto p-3">
                    {children ? children : <h1>no subject</h1>}
                </div>
            </div>
            <MenubarDynamic sidebar={sidebar} sendSidebarState={sendSidebarState} />
            {show && <Modal show={show} />}
        </div>
    );
}

export default memo(Dashbord);