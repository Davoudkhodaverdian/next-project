
import Account from "./index";

function AccountLayout({ children }) {

    return (
        <div >
            <Account>
                {children}
            </Account>
        </div>
    );
}

export default AccountLayout;
