import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: 10px 20px;
  background: ${colors.gray};
  border: 1px solid ${colors.neonGreen};

  &:hover {
    margin-top: -20px;
    margin-bottom: 20px;
    transition: 1s;
  }

  @media (min-width: ${bp.xs}) {
    width: 150px;
    height: 200px;
    margin: 10px;
  }

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 300px;
  }
  @media (min-width: ${bp.md}) {
    width: 250px;
    height: 320px;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;

  @media (min-width: ${bp.xs}) {
    height: 100px;
  }

  @media (min-width: ${bp.sm}) {
    height: 200px;
  }

  @media (min-width: ${bp.md}) {
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
`

export const CardTextsContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.xs}) {
    height: 200px;
  }

  @media (min-width: ${bp.sm}) {
    height: 100px;
  }
  @media (min-width: ${bp.md}) {
    height: 100px;
  }
`

export const Name = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  color: ${colors.offWhite};

  @media (min-width: ${bp.xs}) {
    font-size: 8px;
  }

  @media (min-width: ${bp.sm}) {
  }
  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`
export const Tech = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  text-align: center;
  color: ${colors.offWhite};
  padding: 0 5px;

  @media (min-width: ${bp.xs}) {
    font-size: 8px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 11px;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const DemoLink = styled.div`
  margin: 5px 10px;

  > a {
    color: ${colors.offWhite};

    &:hover {
      color: ${colors.neonGreen};
    }
  }
`
