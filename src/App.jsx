import "./app.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about me/About";
import Projects from "./components/projects/Projects";
import TechnicalSkils from "./components/technicalSkills/TechnicalSkils.jsx"
import Contacts from "./components/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return <div>
    <Navbar/>
    <section id="Home">
    <Hero />
    </section>
    {/* <section id="Services"><Parallax type={"services"}/></section> */}
    {/* <section><Services /></section> */}
    <section id="About"><About/></section>
    <section id="Projects"><Projects id="Projects"/></section>
    {/* <Projects id="Projects"/> */}
    <section id="Skills"><TechnicalSkils /></section>
    <section id="Contact"><Contacts /></section>
    <Footer />
  </div>
};

export default App;
