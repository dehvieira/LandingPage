import styled from "styled-components";

export const Container = styled.div`
      
      position: absolute;
      top: 66px;
      left:70px;
      background: #daaaff;
      color: #fff;
      width: 9.625em;
      height: 4.812em;
      border-radius: 12px;
      text-align:left;
      padding: 0.6875em;
      overflow: hidden;

      small{
            font-size:0.875em;
      }
      
      div{ 
            display:flex;
            
            align-items:center;
            
            span{
                  font-size:25px;
                  font-weight:200;
                  margin-right: 5px;
            }
           
      }


      i{
           width: 9.625em; 
           height:4.8125em;
           position:absolute;
           border-radius: 50px;

         
          

           &.circle1{
                  left: 93.17px;
                  top: -16.17px;
                  background: linear-gradient(0deg, 
                  rgba(255, 255, 255, 0.3), 
                  rgba(255, 255, 255, 0.3));
           }

           &.circle2{
                  background: linear-gradient(0deg, 
                  rgba(255, 255, 255, 0.3), 
                  rgba(255, 255, 255, 0.1));
                  transform: rotate(45deg);

                  left:70px;
                  bottom:-50px; 
           }  

           &.circle3{
                 border: 1px solid rgba(255, 255, 255, 0.5);
                 transform: rotate(-72deg);
                 top: -54px;
                 left: 45px;
                 
           }
      
      
      }



`