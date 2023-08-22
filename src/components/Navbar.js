import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import '../CSS/Navbar.css';
import DarkMode from '../assets/DarkMode';
import LightMode from '../assets/LightMode';

const Navbar = () => {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const darkModeSwitch = () => {
        if (darkMode === true) {
            setDarkMode(false);
            document.cookie = "false"
        } else {
            setDarkMode(true);
            document.cookie = "true";
        }
    }
    return (
        <div className={`${darkMode ? "navbar navbarDark" : "navbar"}`}>
            <div className="logo"><Link to="/"><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="1" /></Link></div>
            <span>Insect Lab@TAU.</span>
            <div className="links">
                <NavLink to={"/home"}><span>Home</span></NavLink>
                <NavLink to={"/research"}><span>Research</span></NavLink>
                <NavLink to={"/publications"}><span>Publications</span></NavLink>
                <NavLink to={"/members"}><span>Lab members</span></NavLink>
                <NavLink to={"/contact"}><span>Contact</span></NavLink>
                {/* <NavLink to={"/positions"}><span>Open posiotions</span></NavLink> */}
            </div>                
            <div className="logo"><Link to="https://en-lifesci.tau.ac.il/" target='_blank'><img src='https://www.aftau.org/wp-content/uploads/2020/07/Wise.png' alt=''></img></Link></div>
            <div className='darkModeSwitch' onClick={darkModeSwitch}>
                <span>{darkMode ? <LightMode color={"white"}/> : <DarkMode color={"black"}/>}</span>
            </div>
        </div>
    )
}

export default Navbar;