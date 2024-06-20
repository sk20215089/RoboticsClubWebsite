import React from 'react'
import Navbar from '../Components/Navbar'
import Home_Hero1 from '../Components/Home_Hero1';
import Footer from '../Components/Footer';
import Testimonials from '../Components/Testimonials';
import ContactUs from '../Components/ContactUs';
import Project from '../Components/Project'

function Home(props) {
    const {theme}=props;
    const {setTheme}=props;
  return (
    <div>
    <Navbar theme ={theme} setTheme={setTheme} />
    {/* <Home_Hero1  theme ={theme} setTheme={setTheme} /> */}
    <Project  theme ={theme} setTheme={setTheme}/>
    <Testimonials  theme ={theme} setTheme={setTheme}/>
    <ContactUs  theme ={theme} setTheme={setTheme}/>
    <Footer  theme ={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Home