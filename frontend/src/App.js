import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import SignUpForm from './Authentication/SignUpForm/SignUpForm';
import SignInForm from './Authentication/SignInForm/SignInForm';
import GetCurrentUserDetails from './Authentication/GetCurrentUserDetails/GetCurrentUserDetails';
import LogOutForm from './Authentication/LogOutForm/LogOutForm';
import ProfileDashboard from './Components/Profile/ProfileDashboard/ProfileDashboard';
import ProfileForm from './Components/Profile/ProfileForm/ProfileForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users/sign_in" element={<SignInForm />} />
          <Route path="users/sign_up" element={<SignUpForm />} />
          <Route path="users/get_current" element={<GetCurrentUserDetails />} />
          <Route path="users/log_out" element={<LogOutForm />} />
          <Route path="users/dashboard" element={<ProfileDashboard />} />
          <Route path="users/dashboard/new" element={<ProfileForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
