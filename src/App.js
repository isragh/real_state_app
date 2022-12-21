import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Explore from './components/routes/Explore';
import Offers from './components/routes/Offers';
import Profile from './components/routes/Profile';
import SignIn from './components/routes/SignIn';
import SignUp from './components/routes/SignUp';
import ForgotPassword from './components/routes/ForgotPassword';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
