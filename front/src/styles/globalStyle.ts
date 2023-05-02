import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        background-color: var(--Grey-4);
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    :root {
        --background: #839791;
        --background2: #aac0af;
        --color1: #896978;
        --color2: #efd5c3;
        --color3: #ffd4ca;
        --color4: #f7b32b;

        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;


        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;

        --Feedback-sucess: #3FE864;
        --Feedback-negative: #E83F5B;  
    }

    ul li a {
        list-style: none;
        text-decoration: none;
        margin: 0px;
        padding: 0px;
    }
    
    button {
        border: none;
        background: none;
    }
`;



export default GlobalStyle;