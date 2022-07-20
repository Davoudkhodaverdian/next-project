

import BasicLayout from "./basicLayout";

import observable from "../patterns/observable";
import HeroSection from "./heroSection";
import Footer from "./footer";



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
        <Footer />
      </div>
    </BasicLayout>
  );
}

export default Main;
