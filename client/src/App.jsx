import { profile, skills } from "./components/data";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} skills={skills} />
      <Skills skills={skills} />
    </>
  );
}

export default App;