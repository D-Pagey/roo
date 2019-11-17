import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { PAGE_WIDTH } from '../../tokens';

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  * {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
  }

  body, button {  
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
    padding: 0 1rem;
    width: 100%;

    @media (min-width: ${PAGE_WIDTH}) {
        padding: 0;
    }
`;
