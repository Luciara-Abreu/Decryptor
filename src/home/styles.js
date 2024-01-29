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
`
export const ContainerImag = styled.div`
width: 100%;
padding: 2% 0 5% 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
`
export const ContainerResult = styled.div`
    width: 86%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 66px;

label{
  width: 90%;
  height: 100%;
}

.button-copy{
  width: 60%;
  position: relative;
  left: 12%;
}
`