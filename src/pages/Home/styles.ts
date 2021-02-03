import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${(props) => props.theme.colors.tertiary};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: ${(props) => props.theme.colors.gray};
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: ${(props) => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: ${(props) => props.theme.colors.tertiary};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${(props) => props.theme.colors.white};
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.gray};

      svg {
        color: ${(props) => props.theme.colors.tertiary};
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: ${(props) => props.theme.colors.gray};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.gray};
    width: 70px;

    svg {
      color: ${(props) => props.theme.colors.secondary};
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: ${(props) => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${(props) => props.theme.colors.white};
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: ${(props) => props.theme.colors.disabled} !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${(props) => props.theme.colors.tertiary} !important;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;
