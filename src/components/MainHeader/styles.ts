import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.primary};

  padding: 0 16px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
