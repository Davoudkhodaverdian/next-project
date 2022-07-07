

import AccountItems from '../account/items';

function Header({ sendSidebarState, sidebar }) {


    const showSidebar = (event) => {

        event.preventDefault()
        sendSidebarState(!sidebar)
    }

    return (
        <div className="flex flex-row justify-between shadow h-16 items-center px-2">

            <div className="flex flex-row items-center">
                <button className='focus:ring-2 focus:ring-indigo-700 rounded-sm m-2 sm:hidden' onClick={showSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>نام کاربر</div>
            </div>

            <div>
            <AccountItems />
            </div>
        </div>
    )
}

export default Header;