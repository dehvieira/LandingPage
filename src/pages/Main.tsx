import ButtonContact from "../atoms/ButtonContact";

import Frontend from "../templates/Frontend";
import * as S from './styles'

import HeroHeaderImage from '../assets/hero-header-image-2.png';
import CardActivity from "../molecules/CardActivity";
import CardChart from "../molecules/CardChart";



function Main() {  

  return (
     <Frontend> 
     
     <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
        
          <ButtonContact />
        </div>    

        <div>         
      
        <S.ColumnImage>
          <CardActivity />
          <CardChart /> 
            <img src={HeroHeaderImage} alt="A woman doing research" />
         
         
        </S.ColumnImage>  
                      
        </div>

     </S.Container>

     </Frontend>
  )
}

export default Main
