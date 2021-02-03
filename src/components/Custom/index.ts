import styled from 'styled-components';

export const InputContent = styled.div`
  width: 100%;
  margin-top: 1rem;

  input {
    font-size: 1.5rem;
    font-family: inherit;
    padding: 1.5rem 2rem;
    border-radius: 4px;
    border: none;
    border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    color: ${(props) => props.theme.colors.white};
    transition: all 0.2s;

    background: rgba(
      ${(props) => props.theme.colors.background_rgba[0]},
      ${(props) => props.theme.colors.background_rgba[1]},
      ${(props) => props.theme.colors.background_rgba[2]},
      ${(props) => props.theme.colors.background_transparent}
    );

    &:focus {
      &:invalid {
        border-bottom: 3px solid ${(props) => props.theme.colors.error_title};
      }

      outline: none;
      box-shadow: 0 1rem 2rem rgba(${(props) => props.theme.colors.black}, 0.1);
      border-bottom: 3px solid ${(props) => props.theme.colors.tertiary};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.gray};
    }
  }

  label {
    font-size: 1.2rem;
    margin-top: 0.7rem;
    color: ${(props) => props.theme.colors.tertiary};

    display: block;

    transition: all 0.3s;
  }

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

export const RadioContent = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-bottom: 16px;

  input:checked ~ label span::after {
    opacity: 1;
  }

  input {
    display: none;
  }

  label {
    font-size: 22px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};

    position: relative;

    display: flex;
    align-items: center;
  }

  span {
    height: 1.5rem;
    width: 1.5rem;
    border: 3px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 50%;
    display: inline-block;
    margin-right: 16px;
    position: relative;

    &::after {
      content: '';
      height: 0.6rem;
      width: 0.6rem;
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${(props) => props.theme.colors.tertiary};
      opacity: 0;

      transition: opacity 0.2s;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  button {
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  width: 100%;
`;

export const ListItems = styled.li`
  background: rgba(
    ${(props) => props.theme.colors.background_rgba[0]},
    ${(props) => props.theme.colors.background_rgba[1]},
    ${(props) => props.theme.colors.background_rgba[2]},
    ${(props) => props.theme.colors.background_transparent}
  );

  border-radius: 4px;
  border-left: 6px solid ${(props) => props.theme.colors.tertiary};

  padding: 4px 16px;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + li {
    margin-top: 16px;
  }

  label {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    color: ${(props) => props.theme.colors.tertiary};

    p {
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 0 !important;
      margin: 0 auto;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;

    button {
      background: transparent;
      border: none;

      display: flex;
      align-items: center;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      svg {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;
