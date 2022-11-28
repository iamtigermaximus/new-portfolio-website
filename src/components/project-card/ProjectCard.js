import React from 'react'
import {
  CardContainer,
  ImageContainer,
  Image,
  CardTextsContainer,
  Name,
  Tech,
  LinksContainer,
  DemoLink,
} from './ProjectCard.styles'
import { FaGlobe, FaLaptopCode } from 'react-icons/fa'

const ProjectCard = ({ id, image, title, tech, github, demo }) => {
  return (
    <CardContainer key={id}>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <CardTextsContainer>
        <Name>{title}</Name>
        <Tech>{tech}</Tech>
        <LinksContainer>
          <DemoLink>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='button-link'
            >
              <FaLaptopCode />
            </a>
          </DemoLink>
          <DemoLink>
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='button-link'
            >
              <FaGlobe />
            </a>
          </DemoLink>
        </LinksContainer>
      </CardTextsContainer>
    </CardContainer>
  )
}

export default ProjectCard
