import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.primary};

  padding-left: 16px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.div`
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 10rem;
`;

export const MenuContainer = styled.nav`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 8px 0;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: ${props => props.theme.colors.white};
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }
`;
