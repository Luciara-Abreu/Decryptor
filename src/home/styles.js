import styled from 'styled-components';
import themaDarck from '../assets/mapa-wow.jpeg';


export const ContainerMain = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content: space-between;

background-color: ${(props) => {
    switch (props.theme) {
      case 'escuro':
        return '#333';
      case 'imagem':
        return `url(${themaDarck})`;
      default:
        return 'var(--cor-primaria);';
    }
  }};
  background-image: ${(props) =>
    props.theme === 'imagem' ? `url(${themaDarck})` : 'none'};
  color: ${(props) => (props.theme === 'escuro' ? '#F3F5FC;' : '#111')};
  background-size: cover;
  background-position: center;


textarea{
    width: 100%;
    height: 40vh;
    resize: none;  
    border: none;
    outline: none; 
    padding: 0; 
    margin: 0; 
    overflow: auto; 
    caret-color: var(--cor-secundaria); 
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
}



@media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
  }
`

export const ContainerHeader = styled.div`
width: 100%;
height: 17vh;
display: flex;
align-items: start;
justify-content: space-between;
`

export const ContainerLeft = styled.div`
    width: 60%;
    height: auto;
    padding: 40px 0px 20px 40px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width:1200px){
      width: 100%;
      padding: 40px 0px 20px 0px;
}

`

export const ContainerText = styled.div`
  height: 50vh;
  opacity: 0.8; 

::placeholder {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: #0A3871;
  height: 45vh;  
  padding: 10px;
}

textarea {
  width: 95%;
  height: 49vh;
  color: var(--cor-primaria-font-button);
  font-size: 32px;
  border-radius: 40px;
  background-color: var(--cor-secundaria);  
  padding-left: 20px;
  }  

  .error-message {
    position: relative;
    color: red;
    font-size: 20px;
    margin-top: 20px;
    left: 41%;
    top: 2%;
}

@media (max-width:1200px){
      width: 100%;
      padding: 40px 0px 20px 0px;

  ::placeholder {  
    padding-left: 10px;
  }  
  textarea {
    width: 90%;
    padding: 5%;
  }
  .error-message {
    padding: 10%;
    left: -1%;
    top: -20%;
    font-size: 20px;
  }
}
`

export const ContainerCheckbox = styled.div`
gap: 20px;
padding-left: 30px;

.atencao{
  display:flex;
  align-items: center;
  gap: 2px;
  padding-bottom: 5px;
}

.image-atencao{
padding: 1px;
gap: 2px;
}

@media (max-width:1200px){
  padding-left: 20px;
}
`

export const ContainerButtonsTheme = styled.div`
    width: 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;



  .button-default, .button-dark, .button-image {
    gap: 5px;
    border-radius: 20px;
    border-radius: var(--borda-raio-botao);
    border: var(--borda-botao);
    transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.1s ease;
    cursor: pointer;
    background-color: var(--cor-secundaria-font-button);   
    color: var(--cor-primaria-font-button);
  }

  .button-image:focus,
  .button-image:active,
  .button-dark:focus,
  .button-dark:active,
  .button-default:focus,
  .button-default:active {
    outline: none;
    box-shadow: var(--shadow2);
    transform: scale(0.95);
    color: var(--cor-texto-botao);
    background-color: var(--cor-primaria-font-button);
  }
` 
export const ContainerButtons = styled.div`   
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    width: var(--largura-botao);
    height: var(--altura-botao);
    display: var(--display-botao);
    align-items: var(--alinhamento-botao);
    justify-content: var(--justificativa-botao);
    padding: var(--padding-botao);
    border-radius: var(--borda-raio-botao);
    border: var(--borda-botao);
    font-size: var(--tamanho-fonte-botao);
    transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.1s ease;
    cursor: pointer;
  }

  .button-crytor,  .button-descrytor,  .button-clear, .button-copy,
  .button-default, .button-dark, .button-image {
    background-color: var(--cor-secundaria-font-button);   
    color: var(--cor-primaria-font-button);
  }

  .button-crytor:focus,
  .button-crytor:active,
  .button-descrytor:focus,
  .button-descrytor:active,  
  .button-clear:focus,
  .button-clear:active,
  .button-copy:focus,
  .button-copy:active {
    outline: none;
    box-shadow: var(--shadow2);
    transform: scale(0.95);
    color: var(--cor-texto-botao);
    background-color: var(--cor-primaria-font-button);
  }

  @media (max-width:1200px){ 
    flex-direction: column;
    padding: 5%;

    .button-crytor, .button-descrytor, .button-clear {
      width: 100%;
    }

    .button-crytor:focus,
    .button-crytor:active,
    .button-descrytor:focus,
    .button-descrytor:active,
    .button-clear:focus,
    .button-clear:active,
    .button-copy:focus,
    .button-copy:active {
      width: 100%;
      transform: none;
  }

  }
`

export const ContainerRight = styled.div`
  width: 35%;
  height: auto;
  border-radius: 32px;  
  background-color: var(--cor-secundaria);
  margin: 20px;

  textarea {
    width: 100%;
    margin: 3%;
    padding: 3% 0 0 6%;
    color: #0A3871;
    height: 68vh;
    font-size: 20px;
    color: var(--cor-terceira-font);
    }

    @media (max-width:1200px){
      width: 95%;
      margin: 8px;
      textarea {
        margin: 0;
      }
}
`

export const ContainerImag = styled.div`
width: 100%;
padding: 2% 0 5% 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width:1200px){
  width: 100%;
  padding:0;
}
`

export const ContainerInformation = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
padding-bottom: 10px;

  .text-1{
    color: #343A40;
    font-size: 24px;  
    font-weight: 700;
    margin: 0;  
  }

.text-2, .text-3{
  color: #495057;
  font-size: 24px;  
  font-weight: 400;
  margin: 0;  
  }

  .text-2{
    padding-top: 3%;
  }

  @media (max-width:1200px){
    .text-2, .text-3{
      font-size: 18px;  
    }
  }
`

export const ContainerResult = styled.div`
    width: 86%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 60px;

label{
  width: 90%;
  height: 100%;
}

.button-copy{
  width: 60%;
  position: relative;
  left: 12%;
}
@media (max-width:1200px){ 
  width: 100%;

  .button-copy{
  width: 100%;
  padding: 5%;
  left: 0%;
}
}
`