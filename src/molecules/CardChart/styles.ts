import styled from "styled-components";

export const Container = styled.div`

      position: absolute;
      width: 13.125em;
      height: 13.125em;
      border-radius: 18px;
      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 33.6px 24.5px;

      animation: showOnPage 1.5s linear forwards;

      opacity: 0;

      bottom: -50px;
      left:35px;

      > div {
            display: flex;
            align-items: center;
            justify-content:space-between;

            strong{
                  font-weight:500;
            }
      }

      @keyframes showOnPage {
            from{
                  opacity: 0
            }
            
            to{
                  opacity: 1;
            }
      }

`

function generateSpan(){
      const amountBars = [...Array(12).keys()];

      let styledSpan: any = [];
      
      amountBars.forEach((item) =>{
            styledSpan.push(`
                  div:nth-child(${item +1}) {
                        background: #EFF3FE;
                        height: 91px;
                        width:2.1px;
                        border-radius:5px;
                        display: flex;            
                        align-items: flex-end;

                        span{
                              background: #5236FF;
                              width: 3.5px;
                              height:0;
                              max-height: ${Math.ceil(Math.random() * 100)}px;
                              display: block;
                              border-radius:5px;

                              animation: animationHeight 2s linear forwards;

                        }   
                  } 
                        
            `)
      })

      return styledSpan.join('');

}

export const Chart = styled.div`

      margin-top: 1.75em;
      
      ${generateSpan()}

      @keyframes animationHeight {
            from{
                  height: 0px;
            }
            
            to{
                  height:91px;
            }
      }

     
 
 

`;