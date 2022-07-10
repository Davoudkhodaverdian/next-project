import Main from './../components/main/main'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
const Home = () => {

  const authenticate = useSelector((state) => state.authenticate.authenticate);
  if (authenticate) toast(<div className='vazir-matn-font'>شما با موفقیت وارد شدید</div>)

  return (
    <div>
      <Main />
      <ToastContainer />
    </div>
  )


}

export default Home;
