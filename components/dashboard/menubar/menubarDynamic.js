


import MenubarItems from './menubarItems';

function Menubar({ sidebar, sendSidebarState }) {

    const hideSidebar = () => { sendSidebarState(false) }

    return (
        <>
            <div className={`w-full bg-gray-500/30 ${sidebar ? "" : "hidden"} transition-all absolute md:hidden overflow-auto h-screen inset-0`} onClick={hideSidebar}></div>
            <nav className={`bg-indigo-500 text-white w-48 p-2  top-0 right-[-256px] overflow-auto h-screen ${sidebar ? "right-0" : ""} md:hidden transition-all fixed`}>
                <div className="p-4" >
                    <button onClick={hideSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <img className="h-8 w-auto" src="/images/workflow.svg" alt="Workflow" />
                </div>
                <MenubarItems sendSidebarState={sendSidebarState} />
            </nav>

        </>
    )
}

export default Menubar;