import React from 'react'
import AboutPic from '../../assets/portfolio-pic-about.jpg'
import { Fade } from 'react-awesome-reveal'
import {
  Container,
  HeadingContainer,
  Heading,
  ContentContainer,
  HeroLeft,
  LeftContentContainer,
  Caption,
  AboutContent,
  RightContentContainer,
  ImageContainer,
  Image,
} from './About.styles'
import Particle from '../../components/Particle'

const About = () => {
  return (
    <Container>
      <Particle />
      <ContentContainer>
        <HeroLeft>
          <Fade direction='down'>
            <HeadingContainer>
              <Heading>About me</Heading>
            </HeadingContainer>
          </Fade>
          <LeftContentContainer>
            <Fade direction='down'>
              <Caption>
                My name is Siegfred Gamboa. I'm a self-taught web developer
                based in Helsinki, Finland.
              </Caption>
            </Fade>
            <Fade direction='left'>
              <AboutContent>
                I’ve always sought out opportunities and challenges that are
                meaningful to me.Although my professional path has taken many
                twists and turns — from being a farmer, to small business owner
                and entrepreneur, to a professional chef — I've never stopped
                engaging my passion to help others and solve problems. <br />
                <br />
                I’m naturally inquisitive and enjoy figuring out how things
                work. I enjoy making thoughtful, engaging, and functional web
                applications that have a simple, clean and distinct design.Here
                are some of the technologies and methodologies I am currently
                into: Javascript, React,NextJS,Typescript, HTML, CSS,Styled
                Components, Bootstrap, REST API,JSON,NodeJS,GraphQL,Contentful,
                Visual Studio Code, Github, Git. <br />
                <br />
                When I'm not at work, I spend my time working on my personal
                projects and building my own products. <br />
                <br />
                When I'm not coding, I enjoy spending time with
                friends,traveling and exploring new cities and culture.
              </AboutContent>
            </Fade>
          </LeftContentContainer>
        </HeroLeft>
        <RightContentContainer>
          <ImageContainer>
            <Image src={AboutPic} />
          </ImageContainer>
        </RightContentContainer>
      </ContentContainer>
    </Container>
  )
}

export default About
