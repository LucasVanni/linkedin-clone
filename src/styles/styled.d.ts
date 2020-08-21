import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      text: string,
      title: string,
      numbers: string,
      subText: string,
      background: string,
      backgroundCard: string,
      textSecondary: string,
      
      backgroundHeader: string,
      searchBorder: string
    },
  }
};

  
