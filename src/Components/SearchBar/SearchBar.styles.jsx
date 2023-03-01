import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    position: sticky;
    top: 0;
    top: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background};
    left: 0;
    padding: 2rem;
    justify-content: center;
    z-index: 300;
    border-bottom: 1px solid ${({ theme }) => theme.color.background100};

    ${({ theme }) => theme.mq.lg} {
        position: sticky;
        top: 0;
        left: 0;
        max-width: 100%;
        padding-left: 6rem;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.6rem;
    font-size: ${({ theme }) => theme.font.size.small};
    padding: 0.2rem 0 0.2rem 1rem;
    background-color: ${({ theme }) => theme.color.background100};
    /* 
    &:has(input:focus) {
        outline: 1px solid ${({ theme }) => theme.color.accent};
    } */

    ${({ theme }) => theme.mq.sm} {
        max-width: ${({ theme }) => theme.containerSize.sm};
    }
    ${({ theme }) => theme.mq.md} {
        max-width: ${({ theme }) => theme.containerSize.md};
    }

    ${({ theme }) => theme.mq.lg} {
        max-width: ${({ theme }) => theme.containerSize.sm};
    }
`

export const StyledSearchBar = styled.input`
    all: unset;
    width: 100%;
    padding: 1rem;
`
