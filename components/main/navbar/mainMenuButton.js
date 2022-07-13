
function MainMenuButton({ MenuHandle }) {

    return (
        <button className='  rounded-lg shadow' onClick={MenuHandle} >
            <div className='space-y-1 m-1 md:hidden '>
                <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
            </div>
        </button>
    );
}

export default MainMenuButton;