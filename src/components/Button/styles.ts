import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) => props.theme.colors.tertiary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.2s;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
  }

  svg {
    margin-right: 16px;
  }
`;
