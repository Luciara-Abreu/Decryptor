import styled from 'styled-components';


export const ContainerMain = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content: space-between;

textarea{
    width: 100%;
    height: 40vh;
    resize: none;  
    border: none;
    outline: none; 
    padding: 0; 
    margin: 0; 
    overflow: auto; 
    caret-color: var(--cor-secundaria);   /* transparent Torna o cursor invisível */
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
width: 70%;
height: 17vh;
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

::placeholder {
  padding-left: 150px;
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: #0A3871;
  height: 40vh;  
}

textarea {
  background-color: var(--cor-primaria);
  color: var(--cor-primaria-font-button);
  height: 40vh;
  font-size: 32px;
  }  

  .error-message {
    position: relative;
    color: red;
    font-size: 20px;    
    margin-top: 20px;
    left: 10%;
    top:10%
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
padding-left: 30px;

@media (max-width:1200px){
  padding-left: 20px;
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

  .button-crytor {
    background-color: var(--cor-secundaria-font-button);   
    color: var(--cor-primaria-font-button);
  }

  .button-descrytor {
    background-color: var(--cor-secundaria-font-button);
    color: var(--cor-primaria-font-button);
  }

  .button-clear {
    background-color: var(--cor-secundaria-font-button);
    color: var(--cor-primaria-font-button);
  }

  .button-copy {
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