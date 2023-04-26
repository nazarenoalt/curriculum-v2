import React, { useState } from "react"
// Container components
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'
// Organisms/molecules components
import AboutMe from './components/AboutMe'
import HeaderProfile from './components/HeaderProfile'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Repository from './components/Repository'
import SocialNetworks from './components/SocialNetworks'
import Skills from './components/Skills'
import LanguagesSidebar from './components/LanguagesSidebar'
import PrintPdfButton from "./components/PrintPdfButton"
import SeparatorLine from "./components/SeparatorLine"
// Styles
import { Wrapper } from "./App.style"
import './normalize.css'
// Data
// Hooks
import useLocalStorage from "./hooks/useLocalStorage"

const App = () => {
  const { userData, setUserData } = useLocalStorage()
  
  return (
    <Wrapper>
      <PrintPdfButton />
      <Header>
        <HeaderProfile userInfo={userData.header} />
      </Header>

      <Sidebar>
        <AboutMe text={userData.header.text} />
        {/* An innocent separator line */}
        <SeparatorLine />
        <Contact data={userData.contact} />
        <SocialNetworks  data={userData.SocialNetworks} />
        {/* An innocent separator line */}
        <SeparatorLine /> 

        <Skills hardSkills={userData.hardSkills} softSkills={userData.softSkills} />
        <LanguagesSidebar languages={userData.languages} />
        <Footer />
      </Sidebar>

      <Body>
        <Repository data={userData.repository} />
        <Experience data={userData.experience} />
        <Education data={userData.education} />
      </Body>
      
    </Wrapper>
  )
}

export default App;
