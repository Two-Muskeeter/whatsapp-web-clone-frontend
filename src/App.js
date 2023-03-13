import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './pages/Login/index';
import Chat from './pages/Chat/index';
import Loader from './components/Loader/index'
import useCookie from './hooks/useCookie';
import constant from './constant';
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
function App() {
  const [token, setToken, deleteToken] = useCookie(constant.keys.token);
  console.log(token)
  const [appLoaded, setAppLoaded] = useState(false);
  const [startLoadProgress, setStartLoadProgress] = useState(false);

  useEffect(() => {
    if (userPrefersDark) document.body.classList.add("dark-theme");
    stopLoad();
  }, []);

  const stopLoad = () => {
    setStartLoadProgress(true);
    setTimeout(() => setAppLoaded(true), 3000);
  };

  if (!appLoaded && token) return <Loader done={startLoadProgress} />;

  return (
    <React.Fragment>
      <div className="app">
        <p className="app__mobile-message"> Only available on desktop 😊. </p>
        <div className="app-content">

          {!token ? <Login /> :
            <Chat />
          }
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
