import React, { useState } from 'react';
import useTextEncryption from '../hooks/useTextEncrytion';
import alura from '../assets/Logo-alura.png'
import pessoa from '../assets/pessoa.svg'
import { ContainerHeader, ContainerMain, ContainerLeft, ContainerText, ContainerButtons, 
  ContainerRight, ContainerImag, ContainerResult, ContainerInformation } from './styles';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { encryptText, decryptText } = useTextEncryption();

  const handleEncrypt = () => {
    if (/[^a-z]/i.test(inputText)) {
      setErrorMessage('Apenas letras minúsculas são permitidas.');
      return;
    }

    const encryptedText = encryptText(inputText);
    setOutputText(encryptedText);
    setErrorMessage('');
  };

  const handleDecrypt = () => {
    if (/[^a-z]/i.test(inputText)) {
      setErrorMessage('Caracteres e letras maiúsculas não são permitidas.');
      return;
    }

    const decryptedText = decryptText(inputText);
    setOutputText(decryptedText);
    setErrorMessage('');
  };

  return (

    <ContainerMain>

      <ContainerLeft>
        <ContainerHeader>
          <img src={alura} alt="gif animado" />
        </ContainerHeader>

        <ContainerText>
          <label>
            <textarea
              placeholder="Digite seu texto..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </label>
        </ContainerText>

        <ContainerButtons>
          <button onClick={handleEncrypt} className='button-crytor'>Criptografar</button>
          <button onClick={handleDecrypt} className='button-descrytor'>Descriptografar</button>
          <button onClick={handleDecrypt} className='button-clear'>Limpar</button>
        </ContainerButtons>
      </ContainerLeft>


      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <ContainerRight>
        {outputText == '' ? (
          <>
          <ContainerImag>
          <img src={pessoa} alt="Pessoa olhando uma pedra precisoa com uma lupa" />
          </ContainerImag>
          <ContainerInformation>
            <p className='text-1'> Nenhuma mensagem </p>
            <p className='text-1'> encontrada </p>

            <p className='text-2 '>Digite um texto que você deseja</p>
            <p className='text-3'>criptografar ou descriptografar.</p>              
          </ContainerInformation>
          </>
        ) : (
          <ContainerResult>          
            <label>
              <textarea value={outputText} readOnly />
            </label>
            <ContainerButtons>
              <button onClick={handleDecrypt} className='button-copy'>Copiar</button>
            </ContainerButtons>
          </ContainerResult>
        )}
      </ContainerRight>
    </ContainerMain>
  );
};

export default Home;
