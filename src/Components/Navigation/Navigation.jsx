import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MdMenu, MdClose, MdOutlineLightMode } from 'react-icons/md'
import { NavLinks } from '../NavLinks/NavLinks'
import logo from '../../assets/icons/logo.png'
import logoSmall from '../../assets/icons/logoSmall.png'

export const NavigationWrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: ${({ theme }) => theme.navBar.mobileWidth};
    height: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background100};
    display: flex;
    align-items: center;
    z-index: 99;
    justify-content: space-between;

    ${({ theme }) => theme.mq.lg} {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        gap: 4rem;
        height: 100%;
        padding: 2rem 1.5rem;
        width: ${({ theme }) => theme.navBar.desktopWidth};
        /* border-right: 1px solid ${({ theme }) =>
            theme.color.background200}; */
    }
`

export const StyledMdMenu = styled(MdMenu)`
    cursor: pointer;
`
export const StyledMdClose = styled(MdClose)`
    cursor: pointer;
`

export const StyledMdOutlineLightMode = styled(MdOutlineLightMode)`
    cursor: pointer;
`

const LeftSection = styled.a`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 1rem;
    padding: 1rem 1.8rem;
    position: relative;
    align-items: center;
    /* color: ${({ theme }) => theme.color.accent}; */

    &:hover {
        cursor: pointer;
    }
`

export const LogoSmall = styled.img`
    max-height: 40px;
`

export const Logo = styled.img`
    display: none;
    height: 50px;

    ${({ theme }) => theme.mq.lg} {
        display: flex;
    }
`

export const LeftSectionPageTitle = styled.span`
    /* color: ${({ theme }) => theme.color.primaryText}; */
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    letter-spacing: 15;
`

export const BetaTag = styled.span`
    position: absolute;
    top: 0;
    right: -2.8rem;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    font-size: ${({ theme }) => theme.font.size.ultraSmall};
    color: ${({ theme }) => theme.color.accent};
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1.8rem;
`

export const NavigationItemsContainer = styled.div`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    min-height: calc(100vh - ${({ theme }) => theme.navBar.mobileHeight});
    height: 100dvh;
    height: 100svh;
    height: 100%;
    width: 100%;
    left: 0;
    top: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background100};
    overflow-y: auto;
    padding-top: 2rem;

    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    ${({ theme }) => theme.mq.lg} {
        position: static;
        display: flex;
        overflow: hidden;
        background-color: transparent;
        height: 100%;
        padding: 0;
        overflow: auto;
        min-height: unset;
    }
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.mq.lg} {
        display: none;
    }
`

export const Navigation = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate()

    const closeMenu = () => {
        setIsOpen(false)
    }
    const openMenu = () => {
        setIsOpen(true)
    }
    const navigateToHomePage = () => {
        navigate('/')
    }
    return (
        <NavigationWrapper>
            <LeftSection onClick={navigateToHomePage}>
                {/* <TbBrandGravatar size="3rem" /> */}
                <LogoSmall src={logoSmall} alt="logoSmall" />
                <Logo src={logo} alt="logo" />
                <BetaTag>BETA</BetaTag>
            </LeftSection>
            <NavigationItemsContainer isOpen={isOpen}>
                <NavLinks />
            </NavigationItemsContainer>
            <RightSection>
                <StyledMdOutlineLightMode size="3rem" />
                <MenuIcon>
                    {isOpen ? (
                        <StyledMdClose size="3rem" onClick={closeMenu} />
                    ) : (
                        <StyledMdMenu size="3rem" onClick={openMenu} />
                    )}
                </MenuIcon>
            </RightSection>
        </NavigationWrapper>
    )
}
