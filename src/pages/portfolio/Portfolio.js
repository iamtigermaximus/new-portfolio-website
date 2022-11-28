import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'
import Particle from '../../components/Particle'
import {
  Container,
  HeadingContainer,
  Heading,
  ProjectContainer,
  LoadingContainer,
  Loader,
} from './Portfolio.styles'
import ProjectCard from '../../components/project-card/ProjectCard'
import axios from 'axios'

const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://portfolio-backend-rosy.vercel.app/')
      .then((response) => setProjects(response.data.items))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Container>
      <Particle />
      <Fade direction='down'>
        <HeadingContainer>
          <Heading>Projects</Heading>
        </HeadingContainer>
      </Fade>
      <Fade direction='left' delay='10000s'>
        {loading ? (
          <LoadingContainer>
            <Loader>LOADING...</Loader>
          </LoadingContainer>
        ) : (
          <ProjectContainer>
            {projects
              .slice()
              .reverse()
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  tech={project.tech}
                  demo={project.demoLink}
                  github={project.github}
                />
              ))}
          </ProjectContainer>
        )}
      </Fade>
    </Container>
  )
}

export default Portfolio
