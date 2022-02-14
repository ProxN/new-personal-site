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
        <NextLink href='/'>
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
        </NextLink>
        <Nav>
          <NavLinks>
            <NavItem>
              <NextLink href='/#work' passHref>
                <NavLink>Work</NavLink>
              </NextLink>
            </NavItem>
            <NavItem>
              <NextLink href='/blog' passHref>
                <NavLink>Blog</NavLink>
              </NextLink>
            </NavItem>
            <NavItem>
              <NextLink href='/#about' passHref>
                <NavLink>About</NavLink>
              </NextLink>
            </NavItem>
            <NavItem>
              <NextLink href='/resume.pdf' passHref>
                <ResumeLink>
                  <span>
                    <ArrowSVG />
                  </span>
                  Resume
                </ResumeLink>
              </NextLink>
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
                    <NextLink href='/#work' passHref>
                      <NavLink>Work</NavLink>
                    </NextLink>
                  </NavItem>
                  <NavItem>
                    <NextLink href='/blog' passHref>
                      <NavLink>Blog</NavLink>
                    </NextLink>
                  </NavItem>
                  <NavItem>
                    <NextLink href='/#about' passHref>
                      <NavLink>About</NavLink>
                    </NextLink>
                  </NavItem>
                  <NavItem>
                    <NextLink href='/resume.pdf' passHref>
                      <ResumeLink>Resume</ResumeLink>
                    </NextLink>
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
