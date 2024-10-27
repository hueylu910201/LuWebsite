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
import CommentBoard from './CommentBoard'
import Footer from './Footer'
import BackToTop from './BackToTop'


function App() {
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const dailyRef = useRef(null);
  const commentRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header
        onAboutMeClick={() => scrollToSection(aboutMeRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onDailyClick={() => scrollToSection(dailyRef)}
        onCommentClick={() => scrollToSection(commentRef)}
      />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
        <MySkills />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Portfolio2 />
      <div ref={dailyRef}>
        <Daily />
      </div>
      <div ref={commentRef}>
        <CommentBoard />
      </div>
      <Footer/>
      <BackToTop />
    </>
  )
}

export default App
