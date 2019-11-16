import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { PAGE_WIDTH } from '../../constants';

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  body, button {  
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,400,700&display=swap');

    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.p`
    align-self: center;
    margin: 2.5rem 0;
    max-width: ${PAGE_WIDTH};
    width: 100%;
`;
