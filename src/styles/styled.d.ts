import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaterly: string;
      disabled: string;

      white: string;
      black: string;
      gray: string;

      background_rgba: Array;
      background_transparent: number;

      success_title: string;
      success_background: string;
      info_title: string;
      info_background: string;
      warning_title: string;
      warning_background: string;
      error_title: string;
      error_background: string;
    };
  }
}
