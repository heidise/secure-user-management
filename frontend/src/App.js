import './App.css';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import {useEffect, useState} from 'react';

function App() {
  // [userId, setUserId] = useState(null);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
    }, []);

  return (
    <>
      <header className="header">
          <h1>User management</h1>
      </header>

        {isLogin ?
            <Login onRegistrationClick={() => setIsLogin(false)} />
        : (<Registration onLoginClick={() => setIsLogin(true)} />)
        }
    </>
  );
}

export default App;
