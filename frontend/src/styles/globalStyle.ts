import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
    }

    a,
    a:active,
    a:hover {
        text-decoration: none;
    }
`;

export default GlobalStyle;
