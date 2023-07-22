import React, { useState, useEffect } from 'react';
import Profile from '../../assets/kled.jpeg';
import { Link } from 'react-router-dom';
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiStyledcomponents,
  SiBootstrap,
  SiNodedotjs,
  SiAmazonaws,
  SiAwsamplify,
} from 'react-icons/si';
import Particle from '../../components/Particle';
import { Fade } from 'react-awesome-reveal';
import {
  Container,
  ContentContainer,
  HeroLeft,
  HeroRight,
  Greet,
  Name,
  Caption,
  Role,
  ImageContainer,
  Image,
  TechContainer,
  TechItem,
  Button,
  SliderSection,
  SliderImageWrapper,
  SliderImage,
  Heading,
  SectionButton,
  SectionButtonContainer,
} from './Home.styles';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://portfolio-backend-rosy.vercel.app/')
      .then((response) => setProjects(response.data.items));
  }, []);
  return (
    <>
      <Container>
        <Particle />
        <ContentContainer>
          <HeroLeft>
            <Fade direction="down">
              <Greet>Hey, there!</Greet>
              <Name>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I'm Siegfred.")
                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                    cursor: '',
                  }}
                />
              </Name>
              <Caption>I build things for the web.</Caption>
              <Role>Front End Developer / Full Stack Developer</Role>
              <TechContainer>
                <TechItem>
                  <SiReact />
                </TechItem>
                <TechItem>
                  <SiTypescript />
                </TechItem>
                <TechItem>
                  <SiNextdotjs />
                </TechItem>
                <TechItem>
                  <SiJavascript />
                </TechItem>
                <TechItem>
                  <SiMongodb />
                </TechItem>
                <TechItem>
                  <SiHtml5 />
                </TechItem>
                <TechItem>
                  <SiCss3 />
                </TechItem>
                <TechItem>
                  <SiStyledcomponents />
                </TechItem>
                <TechItem>
                  <SiBootstrap />
                </TechItem>
                <TechItem>
                  <SiNodedotjs />
                </TechItem>
                <TechItem>
                  <SiAmazonaws />
                </TechItem>
                <TechItem>
                  <SiAwsamplify />
                </TechItem>
              </TechContainer>
            </Fade>
            <Link to="/contact">
              <Button>Contact me</Button>
            </Link>
          </HeroLeft>
          <HeroRight>
            <ImageContainer>
              <Image src={Profile} />
            </ImageContainer>
          </HeroRight>
        </ContentContainer>
        <SliderSection>
          <Heading>My Portfolio</Heading>
          <SliderImageWrapper>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
            >
              {projects.map((project, index) => {
                return <SliderImage src={project.image} alt="" key={index} />;
              })}
            </Carousel>
          </SliderImageWrapper>
          <SectionButtonContainer>
            <Link to="/portfolio">
              <SectionButton>View my work page</SectionButton>
            </Link>
          </SectionButtonContainer>
        </SliderSection>
      </Container>
    </>
  );
};

export default Home;
