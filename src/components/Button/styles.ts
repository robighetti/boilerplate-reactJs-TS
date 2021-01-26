import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fa923f;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
    background: ${shade(0.2, '#fa923f')};
  }
`;
