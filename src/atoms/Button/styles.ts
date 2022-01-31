
import styled from "styled-components";

export const Container = styled.button `

      width: 8.125em;
      height: 2.625em;;
      border: 1px solid #17A4D0;
      border-radius: 5px;
      background: rgba(221, 247, 255, 0.5) ;
      color: #17A4D0;
      font-size: 0.875em;
      margin-left: 3.125em;
      transition: all 0.2s ease-out;

      &:hover{
            cursor: pointer;
            box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
                -webkit-transform: translateX(-3px);
                transform: translateX(-3px);
      }
      




`;