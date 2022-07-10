

import Menubar from './menubar/menubar';
import Header from './header';
import { useState } from 'react';
import MenubarDynamic from './menubar/menubarDynamic'
import BasicLayout from '../main/basicLayout';

function Dashbord({ children }) {

    const [sidebar, setSidebar] = useState(false);
    const sendSidebarState = (show) => { setSidebar(show) }

    return (
        <div className='pr-0 sm:flex flex-row overflow-hidden '>
            <Menubar sidebar={sidebar} sendSidebarState={sendSidebarState} />
            <div className="flex flex-col w-full  md:pr-48">
                <Header sendSidebarState={sendSidebarState} sidebar={sidebar} />
                <div className="w-full max-w-7xl mx-auto p-3">
                    {children ? children : <h1>no subject</h1>}
                </div>
            </div>
            <MenubarDynamic sidebar={sidebar} sendSidebarState={sendSidebarState} />
        </div>
    );
}

export default Dashbord;