import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Particle from '../../components/Particle'
import {
  Container,
  ContentContainer,
  HeadingContainer,
  Heading,
  Caption,
  Form,
  Label,
  Input,
  ButtonContainer,
  Button,
  TextArea,
} from './Contact.styles'

const Contact = () => {
  return (
    <Container>
      <Particle />
      <ContentContainer>
        <Fade direction='down'>
          <HeadingContainer>
            <Heading>Contact me</Heading>
          </HeadingContainer>
          <Caption>Want to work together or have any questions?</Caption>
        </Fade>
        <Fade direction='left'>
          <Form>
            <Label>Name</Label>
            <Input />
            <Label>Email</Label>
            <Input />
            <Label>Subject</Label>
            <Input />
            <Label>Message</Label>
            <TextArea cols='30' rows='5' />
            <ButtonContainer>
              <Button>Send</Button>
            </ButtonContainer>
          </Form>
        </Fade>
      </ContentContainer>
    </Container>
  )
}

export default Contact
