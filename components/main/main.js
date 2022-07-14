
import { ToastContainer } from 'react-toastify';

import BasicLayout from "./basicLayout";

function Main() {

  return (
    <BasicLayout>
      <div className="text-center my-3">
        صفحه اصلی
      </div>
      <ToastContainer />
    </BasicLayout>
  );
}

export default Main;
