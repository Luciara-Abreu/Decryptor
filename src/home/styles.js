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
    caret-color: transparent; 
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;

}
`
export const ContainerHeader = styled.div`
width: 70%;
height: 17vh;
`
export const ContainerLeft = styled.div`
    width: 60%;
    height: auto;
    padding: 40px 0px 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ContainerText = styled.div`

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
`
export const ContainerButtons = styled.div`   
    display: flex;
    /* padding-top: 150px; */
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
  .button-copy{
    background-color: var(--cor-secundaria-font-button);    
    color: var(--cor-primaria-font-button);
  } 
`
export const ContainerRight = styled.div`
  width: 35%;
  height: auto;
  padding: 0 20px 0 20px;
  margin: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--cor-secundaria);

textarea {
  background-color: transparent;
  color: #0A3871;
  height: 70vh;
  font-size: 20px;
  color: var(--cor-terceira-font);
  }
`


export const ContainerImag = styled.div`
width: 35%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerResult = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

label{
  width: 90%;
  height: 100%;
}
.button-copy{
  width: 100%;
  padding-top: 0!important;
}
`