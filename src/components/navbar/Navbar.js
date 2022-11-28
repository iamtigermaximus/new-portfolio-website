import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  NavbarContainer,
  BrandContainer,
  LinkItemContainer,
  LinkItem,
  BrandLinkItem,
  MenuContainer,
  NavbarLinks,
  BurgerMenu,
  MobileMenuContainer,
  SocialsContainer,
  Image,
  SocialItem,
  MobileNavbarLinks,
} from './Navbar.styles'
import Logo from '../../assets/SG-logo.png'

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to='/'>
          <BrandLinkItem>
            <Image src={Logo} />
          </BrandLinkItem>
        </Link>
      </BrandContainer>
      <MenuContainer>
        <NavbarLinks>
          <LinkItemContainer>
            <Link to='/'>
              <LinkItem>Home</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/about'>
              <LinkItem>About</LinkItem>
            </Link>
          </LinkItemContainer>

          <LinkItemContainer>
            <Link to='/portfolio'>
              <LinkItem>Portfolio</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/contact'>
              <LinkItem>Contact</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <LinkItemContainer>
                <Link to='/'>
                  <LinkItem>Home</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/about'>
                  <LinkItem>About</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/portfolio'>
                  <LinkItem>Portfolio</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/contact'>
                  <LinkItem>Contact</LinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
      <SocialsContainer>
        <SocialItem>
          <a href='https://www.linkedin.com/in/siegfred-gamboa-5b1277218'>
            <FaLinkedin />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='https://github.com/iamtigermaximus'>
            <FaGithub />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='mailto:siegy.gamboa@gmail.com'>
            <MdEmail />
          </a>
        </SocialItem>
      </SocialsContainer>
    </NavbarContainer>
  )
}

export default Navbar
