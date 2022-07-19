import PropTypes from 'prop-types';

function MainMenuButton({ MenuHandle }) {

    return (
        <button className='  rounded-md shadow hover:scale-110 md:hidden text-violet-500 transition hover:text-violet-800' onClick={MenuHandle} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    );
}

export default MainMenuButton;


MainMenuButton.propTypes = {
    MenuHandle: PropTypes.func
};