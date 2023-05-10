import './App.css';
// import SignUpForm from './Authentication/SignUpForm/SignUpForm';
// import GetCurrentUserDetails from './Authentication/GetCurrentUserDetails/GetCurrentUserDetails';
// import SignInForm from './Authentication/SignInForm/SignInForm';
// import LogOutForm from './Authentication/LogOutForm/LogOutForm';
// import ProfileForm from './Components/Profile/ProfileForm/ProfileForm';
// import EditProfile from './Components/Profile/EditProfile/EditProfile';
// import ProfileDashboard from './Components/Profile/ProfileDashboard/ProfileDashboard';

// function App() {
//   return (
//     <div>
//       < SignUpForm />
//       < GetCurrentUserDetails />
//       < SignInForm />
//       < LogOutForm />

//       xxx

//       < ProfileForm />
//       {/* < EditProfile /> */}
//       < ProfileDashboard />
//     </div>

//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import SignUpForm from './Authentication/SignUpForm/SignUpForm';
import SignInForm from './Authentication/SignInForm/SignInForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users/sign_in" element={<SignInForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
