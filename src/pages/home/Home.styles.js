import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vh 0;

  @media (min-width: ${bp.lg}) {
    height: 100%;
    color: white;
    padding-left: 15vw;
    padding-top: 0;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${bp.lg}) {
    // margin: 150px 30px 0px;
    height: 100vh;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    order: 1;
  }

  @media (min-width: ${bp.lg}) {
    margin: 30px 10px;
    width: 70%;
    float: left;
    opacity: 0.7;
    order: 1;
  }
`

export const HeroRight = styled.div`
  z-index: 1;
  order: 1;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    order: 2;
  }

  @media (min-width: ${bp.lg}) {
    margin: 30px 10px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 2;
  }
`

export const Greet = styled.h1`
  color: white;
  font-size: 20px;

  @media (min-width: ${bp.lg}) {
    font-size: 30px;
    margin: 0;
    letter-spacing: 3px;
  }
`

export const Name = styled.h1`
  color: ${colors.neonGreen};
  font-size: 50px;
  margin: 0;

  @media (min-width: ${bp.lg}) {
    font-size: 70px;
    letter-spacing: 3px;
    color: ${colors.neonGreen};
  }
`

export const Caption = styled.h1`
  color: white;
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    font-size: 50px;
    margin: 0;
    letter-spacing: 3px;
  }
`

export const Role = styled.p`
  color: white;

  @media (min-width: ${bp.lg}) {
    font-size: 20px;
    letter-spacing: 3px;
  }
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;

  @media (min-width: ${bp.sm}) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: ${bp.md}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.lg}) {
    width: 300px;
    height: 300px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  border-radius: 50%;
  border: 1px solid ${colors.neonGreen};
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TechItem = styled.div`
  color: white;
  margin: 5px;

  @media (min-width: ${bp.lg}) {
    margin: 10px;
    font-size: 20px;

    &:hover {
      color: ${colors.neonGreen};
      transform: scale(1.5);
      font-weight: 700;
    }
  }
`

export const Button = styled.button`
  @media (min-width: ${bp.lg}) {
    width: 150px;
    border: 1px solid ${colors.neonGreen};
    color: ${colors.neonGreen};
    background: transparent;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    font-size: 20px;
    box-shadow: inset 0 0 0 0 ${colors.neonGreen};
    transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

    &: hover {
      color: #08fdd8;
      box-shadow: inset 200px 0 0 0 ${colors.neonGreen};
      color: black;
    }
  }
`
export const SliderSection = styled.div`
  z-index: 1;
  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 30px;
    width: 600px;
    height: 100vh;
  }
`
export const SliderImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid ${colors.neonGreen};

  @media (min-width: ${bp.sm}) {
    width: 450px;
    height: 300px;
  }

  @media (min-width: ${bp.md}) {
    width: 550px;
    height: 350px;
  }

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 600px;
    z-index: 1;
  }
`
export const SliderImageContainer = styled.div``

export const SliderImage = styled.img`
  height: 200px;
  width: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${colors.neonGreen};
  z-index: 1;

  @media (min-width: ${bp.sm}) {
    width: 450px;
    height: 300px;
  }

  @media (min-width: ${bp.md}) {
    width: 550px;
    height: 350px;
  }

  @media (min-width: ${bp.lg}) {
    height: 400px;
    width: 600px;
  }
`
export const Heading = styled.h1`
  letter-spacing: 3px;
  color: ${colors.neonGreen};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.lg}) {
    font-size: 70px;
    margin: 20px 0;
  }
`

export const SectionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionButton = styled.button`
  width: 150px;
  border: 1px solid ${colors.neonGreen};
  color: ${colors.neonGreen};
  background: transparent;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: 10px;
  box-shadow: inset 0 0 0 0 ${colors.neonGreen};
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &: hover {
    color: #08fdd8;
    box-shadow: inset 250px 0 0 0 ${colors.neonGreen};
    color: black;
  }

  @media (min-width: ${bp.md}) {
    width: 200px;
  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
    margin: 20px;
    padding: 20px;
    font-size: 20px;
  }
`
