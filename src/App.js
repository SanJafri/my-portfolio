import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import ProjectColumn from './components/projectColumn/projectColumn';
import About from './components/about/About';
import MoreProject from './components/more_project/MoreProject';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectColumn />
      <About />
      <MoreProject/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
