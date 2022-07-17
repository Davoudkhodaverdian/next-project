

import BasicLayout from "./basicLayout";

import observable from "../patterns/observable";



function Main() {

  observable.notify()
  observable.unsubscribeAll();

  return (
    <BasicLayout>
      <div className="text-center my-3">
        صفحه اصلی
      </div>
    </BasicLayout>
  );
}

export default Main;
