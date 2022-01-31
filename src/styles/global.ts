import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`

      *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }      

      html, body {
            height:100vh;
	      line-height: 1.5;
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
      }

      a{
            text-decoration: none;
            outline: none;

      }
      
`

export default GlobalStyle;