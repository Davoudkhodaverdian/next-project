
import Navbar from "./navbar/navbar";

function BasicLayout({children}) {

    return (
        <div>
            <Navbar/>
            {children}
            <div className='text-center'>Footer</div>
          
        </div>
    );
}

export default BasicLayout;
