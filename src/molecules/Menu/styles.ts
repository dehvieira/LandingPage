import styled  from "styled-components";

export const MenuList = styled.ul `

      margin-left: auto;
`

export const ItemList = styled.li `
      display: inline-block;
      margin-right: 1.5625em;
      font-weight: 500;     
     
      a{
            color: #1E255E;
            transition: color 0.2 ease;
      &:hover{
            color: #17a4d0;
      }}

      :nth-child(5){
            margin-right:0;
          
      }     
`