import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Portfolio from './Portfolio'
import Portfolio2 from './Portfolio2'
import Daily from './Daily'
import BackToTop from './BackToTop'


function App() {
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const dailyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header
        onAboutMeClick={() => scrollToSection(aboutMeRef)}
        onMySkillsClick={() => scrollToSection(mySkillsRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onDailyClick={() => scrollToSection(dailyRef)}
      />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={mySkillsRef}>
        <MySkills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Portfolio2 />
      <div ref={dailyRef}>
        <Daily />
      </div>
      <BackToTop/>
    </>
  )
}

export default App
