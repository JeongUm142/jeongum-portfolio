import Profile from './components/Profile.jsx'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
      // 하나만 반환
      <>
          <Navbar />
          <Profile />
          <About/>
          <Experience/>
          <Projects/>
      </>
  )
}

export default App