import Profile from './components/Profile.jsx'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { useState } from 'react';

function App() {
    const [language, setLanguage] = useState('kr')
    return (
      // 하나만 반환
      <>
          <Navbar
              language={language} // current lang
              setLanguage={setLanguage} // new
          />
          <Profile language={language} />
          <About language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Contact language={language} />
      </>
  )
}

export default App