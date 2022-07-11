
import { useSelector } from "react-redux";
import AccountLayout from "./accountLayout";
function EditAccount() {
    const currentUser = useSelector(state => state.currentUser.currentUser);
    console.log(currentUser);

    return (<AccountLayout>edit</AccountLayout>);

}

export default EditAccount;