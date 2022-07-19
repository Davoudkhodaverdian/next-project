
import Navbar from "./navbar";

function BasicLayout({children}) {

    return (
        <div>
            <Navbar/>
            {children}
            
          
        </div>
    );
}

export default BasicLayout;
