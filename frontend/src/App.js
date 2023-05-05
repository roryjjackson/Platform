import logo from './logo.svg';
import './App.css';
import SignUpForm from './Authentication/SignUpForm/SignUpForm';
import GetCurrentUserDetails from './Authentication/GetCurrentUserDetails/GetCurrentUserDetails';
import SignInForm from './Authentication/SignInForm/SignInForm';
import LogOutForm from './Authentication/LogOutForm/LogOutForm';

function App() {
  return (
    <div>
      < SignUpForm />
      < GetCurrentUserDetails />
      < SignInForm />
      < LogOutForm />
    </div>

  );
}

export default App;
