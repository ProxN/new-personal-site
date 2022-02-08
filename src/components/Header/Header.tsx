import Image from 'next/image';
import NextLink from 'next/link';
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
              <NextLink href='/#work'>
                <NavLink tabIndex={0}>Work</NavLink>
              </NextLink>
            </NavItem>
            {/* <NavItem>
              <NextLink href='/#work'>
                <NavLink tabIndex={0}>Blog</NavLink>
              </NextLink>
            </NavItem> */}
            <NavItem>
              <NextLink href='/#about'>
                <NavLink tabIndex={0}>About</NavLink>
              </NextLink>
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
                    <NextLink href='/#work'>
                      <NavLink tabIndex={0}>Work</NavLink>
                    </NextLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href='#blog'>Blog</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NextLink href='/#about'>
                      <NavLink tabIndex={0}>About</NavLink>
                    </NextLink>
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
