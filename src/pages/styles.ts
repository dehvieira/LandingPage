import styled from "styled-components";

export const Container = styled.div` 

      display:grid;
      grid-template-columns: repeat(2, 50%);
      margin-top:7.5625em;

      text-align: left;
      

      h1{
            color: #1E255E;
            font-weight: 700;           
            text-align:left;            
            font-size: 3.5em; 
            margin-bottom:  1.25rem;      
      }

      p{
            font-size:1em;
            color: rgba(30, 37, 94, 0.7);
            line-height: 1.5em;
            text-align:left;
            width: 25.25em;
      }
`

export const ColumnImage = styled.div `
    
           text-align: right;
           position: relative;
           
      
      `

export const CardImage = styled.div `
           display: block;
         
 

`