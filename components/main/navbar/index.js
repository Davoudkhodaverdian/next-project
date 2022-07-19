
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Instantbuttons from './instantButtons/instantbuttons';
import AuthenticateButtons from './authenticateButtons';
import MainButtons from './mainButtons';
import MainMenuButton from './mainMenuButton';

function Navbar() {

    //this state is for menu of responsive main page
    const [state, setState] = useState(false);
    const MenuHandle = () => { setState(prevState => !prevState) };
    const authenticate = useSelector((state) => state.authenticate.authenticate);

    return (
        <nav className=' p-3 bg-gray-100 shadow'>
            <div className='flex flex-wrap justify-between items-center container mx-auto'>
                <div className='flex'>
                    <div className='flex  items-center'><img src="/images/logo.svg" width={50} alt="logo" /></div>
                    <div className='flex  items-center'><img src="/images/nextLogo.svg" width={50} alt="logo" /></div>
                </div>
                <MainMenuButton MenuHandle={MenuHandle} />
                <div
                    className={
                        `md:flex flex-col md:flex-row  w-full md:w-auto items-start ${!state ? "hidden" : "flex flex-col"} 
                        md:space-x-4 md:space-x-reverse space-y-4 md:space-y-0 mt-2 md:mt-0 md:items-center`
                    }
                >
                    <Instantbuttons />
                    {authenticate ? <MainButtons /> : <AuthenticateButtons />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;