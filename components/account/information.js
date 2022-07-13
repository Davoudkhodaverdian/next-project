
import { useSelector } from "react-redux";
import AccountLayout from "./accountLayout";

function Information() {
    const currentUser = useSelector(state => state.currentUser.currentUser);
    
    return (
        <AccountLayout>
            <div>نام: {currentUser.name}</div>
            <div>ایمیل: {currentUser.email}</div>
            <div>کاربر ویژه: {currentUser.role === "admin" ? "می باشد" : "نمی باشد"}</div>
            <div>تجربه کاری: {
                currentUser.workExperience === "lessoneyear" ? "کمتر ازیک سال" :
                    currentUser.workExperience === "betweenoneandtwoyear" ? "بین یک تا دو سال" : "بیشتر از دو سال"
            }</div>

        </AccountLayout>
    );

}

export default Information;
