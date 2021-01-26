import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    input {
      width: 22px;
      height: 22px;
      margin-right: 12px;

      &:checked {
        color: #fa923f;
      }
    }
  }
`;
