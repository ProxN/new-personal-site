import { styled, keyframes } from '@stitches';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

export const HeaderContainer = styled('header', {
  position: 'fixed',
  width: '100%',
  height: '7rem',
  zIndex: '$4',
  backgroundColor: '$background',
  boxShadow: '0 .9px 2.4px 0px rgba(0,0,0,.24)',
});

export const HeaderContent = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '$4',

  '@md': {
    maxWidth: '114rem',
    margin: '0 auto',
  },
});

export const HeaderLogo = styled('a', {
  height: '4rem',
  width: '4rem',
  cursor: 'pointer',
  userSelect: 'none',
  '&:focus': {
    ring: '0 0 0 2px',
  },
});

export const HamburgerMenu = styled(DialogPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  height: '3rem',
  width: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  zIndex: '$max',

  padding: '.2rem',
  '&:focus': {
    ring: '0 0 0 2px',
  },

  [`&[data-state=open]`]: {
    pointerEvents: 'fill',
  },

  '@md': {
    display: 'none',
  },
});

export const HamburgerItem = styled('span', {
  height: '2px',
  width: '100%',
  display: 'block',
  backgroundColor: '$white',
  transition: '$ease-in-out',
  zIndex: '$max',

  '&:nth-child(1)': {
    width: '50%',
  },
  '&:nth-child(3)': {
    width: '50%',
    alignSelf: 'flex-end',
  },

  [`${HamburgerMenu}[data-state=open] > &:nth-child(odd)`]: {
    width: '100%',
  },
  [`${HamburgerMenu}[data-state=open] > &:nth-child(1)`]: {
    transform: 'rotate(45deg) translate(5px,5px)',
  },
  [`${HamburgerMenu}[data-state=open] > &:nth-child(2)`]: {
    transform: 'scale(0)',
    transition: '$ease-in-out 200ms',
  },
  [`${HamburgerMenu}[data-state=open] > &:nth-child(3)`]: {
    transform: 'rotate(-45deg) translate(6px,-6px)',
  },
});

export const Drawer = styled(DialogPrimitive.Root, {});

export const DrawerOverlay = styled(DialogPrimitive.Overlay, {
  all: 'unset',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,.40)',
  opacity: '0',
  zIndex: '$4',

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 200ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },

  '@md': {
    display: 'none',
  },
});

const slideIn = keyframes({
  from: { transform: 'translate3d(100%,0,0)' },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: 'translate3d(100%,0,0)' },
});

export const DrawerContent = styled(DialogPrimitive.DialogContent, {
  all: 'unset',
  backgroundColor: '$background',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  width: '27rem',
  willChange: 'transform',
  boxShadow: '0 1px 3px .8px $colors$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },
});

export const Nav = styled('nav', {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

export const NavMobile = styled('nav', {
  width: '100%',
  padding: '1.5rem',
});

export const NavLinks = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$3',

  '@md': {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: '0',
  },
});

export const NavItem = styled('li', {
  cursor: 'pointer',
});

export const NavLink = styled('a', {
  fontFamily: '$secondary',
  color: '$white',
  fontWeight: 'normal',
  fontSize: '$md',
  padding: '1rem 2.6rem',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundImage: '$gradient',
    opacity: 0,
    zIndex: '-1',
    transition: '$ease-in-out',
  },

  '&:hover::before': {
    opacity: 1,
  },

  '&:focus': {
    ring: '0 0 0 2px',
  },
});

export const ResumeLink = styled('a', NavLink, {
  backgroundImage: '$gradient',
  backgroundClip: 'text',
  color: 'transparent',
  border: '2px solid transparent',
  display: 'flex',
  alignItems: 'center',

  '&::before': {
    border: '2px solid transparent',
    backgroundImage: 'unset',
    borderImage: '$gradient',
    borderImageSlice: 1,
    opacity: 0,
  },

  '&:hover': {
    opacity: 1,
  },

  '& > span': {
    marginRight: '.6rem',
  },
});
