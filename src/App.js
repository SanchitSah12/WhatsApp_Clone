// import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId ='101495968671-g5rp3nj01df9anvvhg2oao2t96lhaias.apps.googleusercontent.com'
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger/>

        </AccountProvider>
   
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
