import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Reserch from "./Pages/Reserch";
import Members from './Pages/Members';
import Contact from './Pages/Contact';
import Publications from './Pages/Publications';
import Test from './components/Test';

function App() {

  const {darkMode} = useContext(ThemeContext);

  return (
    <Router>
      <div className={`${darkMode ? "AppDark" : "App"}`}>
        <div className="header">
          <Navbar />
        </div>
        <div className={`${darkMode ? "bodyDark" : "body"}`}>
          <Routes>
            <Route path='/*' Component={Home} />
            <Route path='/reserch/*' Component={Reserch} />
            <Route path='/publications' Component={Publications} />
            <Route path='/members/*' Component={Members} />
            <Route path='/contact' Component={Contact} />
            <Route path='/positions' Component={Test} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
