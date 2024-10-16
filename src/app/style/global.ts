"use client";

import "sanitize.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
    margin:0;
    min-height: 100vh;
}




h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
    
}

ul{
    list-style: none;
    padding: 0;
}
*{
}
`;
