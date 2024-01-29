import React, { useState } from 'react';
import useTextEncryption from '../hooks/useTextEncrytion';
import alura from '../assets/Logo-alura.png'
import pessoa from '../assets/pessoa.svg'
import {
  ContainerHeader, ContainerMain, ContainerLeft, ContainerText, ContainerButtons,
  ContainerRight, ContainerImag, ContainerResult, ContainerInformation
} from './styles';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {encryptText, decryptText } = useTextEncryption();


  const handleEncrypt = () => {
    if (/[^a-z\s]/.test(inputText)) {
      setErrorMessage('Caracteres especiais não são permitidos para criptografia.');
      return;
    }
  
    const encryptedText = encryptText(inputText);
    setOutputText(encryptedText);
    setErrorMessage('');
  };
  
  const handleDecrypt = () => {
    if (/[^a-z\s]/.test(inputText)) {
      setErrorMessage('Caracteres especiais não são permitidos para criptografia.');
      return;
    }
  
    const decryptedText = decryptText(inputText);
    setOutputText(decryptedText);
    setErrorMessage('');
  };


  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setErrorMessage('');
  };


  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = outputText;

    // Adiciona o elemento ao corpo do documento
    document.body.appendChild(textArea);

    // Seleciona o texto na área de texto criada
    textArea.select();
    document.execCommand('copy');

    // Remove o elemento da árvore DOM
    document.body.removeChild(textArea);
  };



  return (

    <ContainerMain>

      <ContainerLeft>
        <ContainerHeader>
          <img src={alura} alt="gif animado" />
        </ContainerHeader>

        <ContainerText>
            <textarea
              placeholder="Digite seu texto..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </ContainerText>


        <ContainerButtons>
          <button onClick={handleEncrypt} className='button-crytor'>Criptografar</button>
          <button onClick={handleDecrypt} className='button-descrytor'>Descriptografar</button>
          <button onClick={handleClear} className='button-clear'>Limpar</button>
        </ContainerButtons>
      </ContainerLeft>

      <ContainerRight>
        {outputText === '' ? (
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
              <button onClick={handleCopy} className='button-copy'>Copiar</button>
            </ContainerButtons>
          </ContainerResult>
        )}
      </ContainerRight>
    </ContainerMain>
  );
};

export default Home;
