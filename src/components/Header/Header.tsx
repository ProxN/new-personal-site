import Image from 'next/image';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HamburgerItem,
  HamburgerMenu,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NavItem,
  NavLink,
  NavLinks,
  ResumeLink,
  NavMobile,
  Nav,
} from './Header-styles';
import ArrowSVG from '@assets/arrow.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo tabIndex={0}>
          <Image
            alt='ayoubkanoun.com'
            src='/logo.svg'
            layout='responsive'
            height='100%'
            width='100%'
            priority
          />
        </HeaderLogo>
        <Nav>
          <NavLinks>
            <NavItem>
              <NavLink href='#work'>Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#blog'>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#about'>About</NavLink>
            </NavItem>
            <NavItem>
              <ResumeLink>
                <span>
                  <ArrowSVG />
                </span>
                Resume
              </ResumeLink>
            </NavItem>
          </NavLinks>
        </Nav>
        <Drawer>
          <HamburgerMenu aria-label='Menu toggle'>
            <HamburgerItem />
            <HamburgerItem />
            <HamburgerItem />
          </HamburgerMenu>
          <DrawerOverlay>
            <DrawerContent>
              <NavMobile>
                <NavLinks>
                  <NavItem>
                    <NavLink href='#work'>Work</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='#blog'>Blog</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='#about'>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <ResumeLink>Resume</ResumeLink>
                  </NavItem>
                </NavLinks>
              </NavMobile>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
