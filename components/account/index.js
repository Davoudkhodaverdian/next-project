
import BasicLayout from "../main/basicLayout";
import { useSelector } from "react-redux";
import ProfileItems from "./profileItems";

function UserAccount({ children }) {

  const currentUser = useSelector(state => state.currentUser.currentUser);

  return (
    <BasicLayout>
      <div>
        <div className="flex flex-row">
          <div className="m-3 text-center border border-gray-200 rounded w-[300px]">
            <div className='bg-gray-100 p-3'>
              <div>نام کاربر: {currentUser.name}</div>
              <div className="flex justify-center items-center p-4 m-3">
                {/* avatar svg */}
                <img src="/images/maleAvatar.svg" width={60} alt="avatar" />
              </div>
            </div>
            <div>
              <ProfileItems />
            </div>
            <div>

            </div>
          </div>

          <div className="p-2 m-3">
          {children}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export default UserAccount;
