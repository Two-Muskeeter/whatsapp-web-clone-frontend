import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/login';
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

  if (!appLoaded) return <Loader done={startLoadProgress} />;

  return (
    <React.Fragment>
      <div className="app">
        <p className="app__mobile-message"> Only available on desktop 😊. </p>
        <div className="app-content">

          {!token ? <Login /> :
            <h1>Logged In</h1>
            // <Chat />
          }
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
