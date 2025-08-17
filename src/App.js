import { useRef } from "react";
import About from './components/About';
import Header from './components/Header'
import Home from './components/Home';
import Expertise from './components/Expertise';
import Thoughts from './components/Thoughts'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import Theme from "./components/Theme";

function App() {

     const HomeRef = useRef(null);
     const AboutRef = useRef(null);
     const ExpertiseRef = useRef(null);
     const ThoughtsRef = useRef(null);
     const ProjectsRef = useRef(null);
     const ContactRef = useRef(null);
     return (
          <>
               <Header homeRef={HomeRef} aboutRef={AboutRef} expertiseRef={ExpertiseRef} thoughtsRef={ThoughtsRef} projectsRef={ProjectsRef} contactRef={ContactRef} />
               <Theme />
               <main className='main'>
                    <Home aboutRef={AboutRef} ref={HomeRef} contactRef={ContactRef} />
                    <About ref={AboutRef} />
                    <Expertise ref={ExpertiseRef} />
                    <Projects ref={ProjectsRef} />
                    <section ref={ThoughtsRef} id="thoughts">
  <Thoughts />
</section>
                    <Contact ref={ContactRef} />
               </main>
               <Footer aboutRef={AboutRef} projectsRef={ProjectsRef} />
               <ScrollUp homeRef={HomeRef} />

          </>
     );
}

export default App;
