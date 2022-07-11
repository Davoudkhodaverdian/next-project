
import { useSelector } from "react-redux";
import AccountLayout from "./accountLayout";

function Information() {
    const currentUser = useSelector(state => state.currentUser.currentUser);
    console.log(currentUser);
    return (<AccountLayout>information</AccountLayout>);

}

export default Information;
