import {createGlobalStyle} from 'styled-components'

import bkg1 from '../assets/background1.svg';
import bkg2 from '../assets/background2.png';


const GlobalStyle = createGlobalStyle`

      *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }      

      html, body, #root {
            height:100vh;
	      line-height: 1.5;
      }

      body{           
            font-family: 'Poppins', sans-serif;
            background: url(${bkg2}) no-repeat 1010px, url(${bkg1}) no-repeat 930px;
            background-size:cover;
            background-color: #F8FDFF;

      }

      ol, ul {
      	list-style: none;
      }

      blockquote, q {
      	quotes: none;
      }

      blockquote:before, blockquote:after,
      q:before, q:after {
      	content: '';
      	content: none;
      }

      table {
      	border-collapse: collapse;
      	border-spacing: 0;
      }

      button{
            background-color:none;
            border: none;
            outline: none;
            font-family: 'Poppins', sans-serif;
      }

      a{
            text-decoration: none;
            outline: none;
      }

     
      
`

export default GlobalStyle;