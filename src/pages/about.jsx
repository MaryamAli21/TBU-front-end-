import React from 'react'
import PageTitle from '../components/common/pageTitle'
import AboutDetails from '../components/sections/abouts/about'
import Services from '../components/sections/services/servicesAbout'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <>
      <PageTitle link={"About"} pageName={"About Us"} />
      <AboutDetails/>
      <Services/>
      <ScrollRestoration />
    </>
  )
}

export default About