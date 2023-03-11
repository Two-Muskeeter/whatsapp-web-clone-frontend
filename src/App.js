import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/login';
import Loader from './components/Loader/index'
const userPrefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;
function App() {

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

          <Routes>

            <Route path="/" element={<Login />} />
          </Routes>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
