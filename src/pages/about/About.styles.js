import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  color: white;

  @media (min-width: ${bp.lg}) {
    height: 100vh;
    padding-left: 15vw;
    padding-top: 0;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  letter-spacing: 3px;
  color: ${colors.neonGreen};

  @media (min-width: ${bp.lg}) {
    font-size: 70px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`

export const HeroLeft = styled.div`
  width: 100%;
  @media (min-width: ${bp.lg}) {
    width: 70%;
    display: flex;
    flex-direction: column;
    float: left;
    opacity: 0.7;
  }
`

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (min-width: ${bp.lg}) {
    padding: 30px;
    letter-spacing: 3px;
  }
`

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: ${bp.lg}) {
    margin: 30px 10px;
    width: 30%;
  }
`

export const Greet = styled.h1`
  @media (min-width: ${bp.lg}) {
    font-size: 30px;
    margin: 0;
    letter-spacing: 3px;
  }
`

export const Name = styled.h1`
  @media (min-width: ${bp.lg}) {
    font-size: 70px;
    margin: 0;
    letter-spacing: 3px;
    color: ${colors.neonGreen};
  }
`

export const Caption = styled.h1`
  font-size: 20px;
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    font-size: 30px;
    letter-spacing: 2px;
  }
`

export const Role = styled.p`
  @media (min-width: ${bp.lg}) {
    font-size: 20px;
    letter-spacing: 3px;
  }
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  border: 1px solid ${colors.neonGreen};
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TechItem = styled.div`
  margin: 10px;
  font-size: 20px;

  &:hover {
    color: ${colors.neonGreen};
    transform: scale(1.5);
    font-weight: 700;
  }
`
export const AboutContent = styled.div`
  display: flex;
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`
