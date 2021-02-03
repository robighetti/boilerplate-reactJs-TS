import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme.colors.tertiary};
      width: 32px;
      height: 32px;
      margin-right: 48px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${(props) => props.theme.colors.quaterly};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
        transform: scale(1.02);
      }
    }
  }
`;
