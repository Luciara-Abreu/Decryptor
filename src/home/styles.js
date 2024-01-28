import styled from 'styled-components';


export const ContainerMain = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content: space-between;
background: pink;

`
export const ContainerHeader = styled.div`
width: 70%;
height: 17vh;
`
export const ContainerLeft = styled.div`
width: 50%;
height: auto;
padding: 40px;
`

export const ContainerText = styled.div`

::placeholder {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: #0A3871;
  height: 40vh;
}

textarea {
    background-color: var(--cor-primaria);
    width: 100%;
    height: 40vh;
    resize: none;  
    border: none;
    outline: none; 
    padding: 0; 
    margin: 0; 
    overflow: auto; 
    caret-color: transparent; 

  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: #0A3871;
  height: 40vh;
  }
`
export const ContainerButtons = styled.div`   
    display: flex;
    padding-top: 66px;
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
    }

  .button-crytor{
  background-color: var(--cor-primaria-font-button);   
  color: var(--cor-texto-botao); 
  }  
  .button-descrytor{
  background-color: var(--cor-secundaria-font-button);    
  color: var(--cor-primaria-font-button);
  }  
  .button-clear{
    background-color: var(--cor-secundaria-font-button);    
    color: var(--cor-primaria-font-button);
  }  
`
export const ContainerRight = styled.div`
width: 30%;
margin: 20px;
background-color: gray;
`