import styled, { css } from 'styled-components';

interface MenuProps {
  menu: boolean;
}

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.primary};

  padding-left: 16px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Content = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    margin-bottom: 16px;
    width: 100%;

    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: bold;

    transition: all 0.2s;

    &:hover {
      transform: scale(1.01);
    }

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Header = styled.div`
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 10rem;
`;

export const Menu = styled.ul`
  margin-top: 16px;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListItem = styled.li<MenuProps>`
  position: relative;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${(props) => props.theme.colors.tertiary};
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;

    ${(props) =>
      props.menu &&
      css`
        transform: scaleY(0);
        width: 0%;
      `}
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    height: 100%;
    justify-content: flex-start;
    border: 0;

    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    position: relative;
    z-index: 10;

    span {
      color: ${(props) => props.theme.colors.white};
      font-size: 16px;

      ${({ theme, menu }) =>
        menu &&
        css`
          color: ${theme.colors.tertiary};
        `}
    }

    svg {
      margin-right: 2rem;

      ${({ theme, menu }) =>
        menu &&
        css`
          color: ${theme.colors.tertiary};
        `}
    }
  }
`;
