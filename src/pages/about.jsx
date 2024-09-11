import React from 'react'
import PageTitle from '../components/common/pageTitle'
import AboutDetails from '../components/sections/abouts/about'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <>
      <PageTitle link={"About"} pageName={"About Us"} />
      <AboutDetails/>
      <ScrollRestoration />
    </>
  )
}

export default About