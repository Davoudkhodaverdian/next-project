

import BasicLayout from "./basicLayout";

import observable from "../patterns/observable";
import HeroSection from "./heroSection";



function Main() {

  observable.notify()
  observable.unsubscribeAll();

  return (
    <BasicLayout>
     
      <div className="">
        <div className="text-center py-3">
          صفحه اصلی
        </div>
        <HeroSection />

      <div className='text-center'>Footer</div>
      </div>
    </BasicLayout>
  );
}

export default Main;
