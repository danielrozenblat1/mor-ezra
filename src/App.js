import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ByMe from './components/ByMe/ByMe';
import Carousel from './components/recommends/Carousel';
import { useEffect, useState } from 'react';
import Hamlatzot from './components/recommends/Hamlatzot';
import Recommends from './components/recommends/Recommends';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBarNew />
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <Carousel/>
  <Recommends/>
  <AboutMe/>
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
