

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

//component
import Messenger from "./components/Messenger";

function App() {
  

  const clientId='554591833281-pqobk2b8825cl084vqv9p7l9mevtrfgg.apps.googleusercontent.com';
  return (
  
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
         <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
