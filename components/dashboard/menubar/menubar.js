


import MenubarItems from './menubarItems';

function Menubar() {


    return (


        <>
            <nav className='bg-indigo-500 text-white w-64 p-2 hidden sm:block overflow-auto h-screen'>
                <div className="p-4">
                    <img className="h-8 w-auto" src="/images/workflow.svg" alt="Workflow" />
                </div>
                <MenubarItems />
            </nav>
        </>


    )
}

export default Menubar;