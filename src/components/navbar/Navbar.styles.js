import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  z-index: 2;
  background: ${colors.matteBlack};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray};

  @media (min-width: ${bp.lg}) {
    width: 15vw;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${colors.gray};
  }
`

export const BrandContainer = styled.div`
  margin: 0 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    text-decoration: none;
  }

  @media (min-width: ${bp.lg}) {
    flex-direction: column;
    padding: 30px 0;
  }
`
export const BrandLinkItem = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.lightGray};

  @media (min-width: ${bp.lg}) {
    font-size: 25px;
    padding: 0 30px;
  }
`

export const LinkItemContainer = styled.div`
  display: flex;
  justify-content: center;

  > a {
    text-decoration: none;
  }
  @media (min-width: ${bp.lg}) {
    opacity: 0.7;
    width: 100%;
  }
`
export const LinkItem = styled.h1`
  color: ${colors.offWhite};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 0 #08fdd8;
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  width: 150px;

  &: hover {
    color: ${colors.neonGreen};
    box-shadow: inset 200px 0 0 0 ${colors.neonGreen};
    color: black;
  }

  @media (min-width: ${bp.lg}) {
    margin: 10px 10px;
    padding: 10px 0px;
    font-size: 20px;
    letter-spacing: 3px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`
export const SocialsContainer = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;

    > a {
      text-decoration: none;
    }
  }
`

export const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;

  @media (min-width: ${bp.lg}) {
    border: 1px solid ${colors.neonGreen};
  }
`
export const SocialItem = styled.h1`
  font-size: 30px;
  margin: 10px;

  > a {
    text-decoration: none;
    color: #e6f1ff;

    &: hover {
      color: #08fdd8;
    }
  }
`

/*MOBILE*/

export const MobileMenuContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 10vh;
  width: 100%;
  height: 100vh;
  background: ${colors.matteBlack};
  transform: translateX(0%);
  transition: transform 0.3s ease-out;

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`
export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 20px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    display: none;
  }
`

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`
export const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  > a {
    text-decoration: none;
  }
`
