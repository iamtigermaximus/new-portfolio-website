import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  color: white;

  @media (min-width: ${bp.lg}) {
    padding-left: 15vw;
    padding-top: 0;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: ${bp.md}) {
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    // justify-content: flex-start;
    height: 100%;
    //padding: 30px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
export const Loader = styled.h1`
  font-size: 30px;
`
