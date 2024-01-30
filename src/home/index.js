import React, { useState } from 'react';
import useTextEncryption from '../hooks/useTextEncrytion';
import alura from '../assets/Logo-alura.png'
import pessoa from '../assets/pessoa.svg'
import {
  ContainerHeader, ContainerMain, ContainerLeft, ContainerText, ContainerButtons,
  ContainerRight, ContainerImag, ContainerResult, ContainerInformation, ContainerCheckbox
} from './styles';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {encryptText, decryptText } = useTextEncryption();
  const [transformToLowerCase, setTransformToLowerCase] = useState(false);

  const findUppercaseCharacters = (text) => {
    const uppercaseRegex = /[A-Z]/g;
    const matches = text.match(uppercaseRegex);
    return matches ? Array.from(new Set(matches)) : [];
  };
  
  const findSpecialCharacters = (text) => {
    const specialRegex = /[^a-zA-Z\s]/g;
    const matches = text.match(specialRegex);
    return matches ? Array.from(new Set(matches)) : [];
  };

  const handleEncrypt = () => {
    const forbiddenUppercase = findUppercaseCharacters(inputText);
    const forbiddenSpecial = findSpecialCharacters(inputText);

    if(forbiddenUppercase.length > 0 && transformToLowerCase != true){
      const forbiddenCharacters = [...forbiddenUppercase];
      setErrorMessage(`Maiúsculas não são permitidas: ${forbiddenCharacters.join(', ')}`);
      return
    }else if (forbiddenSpecial.length > 0 ) {   
      const forbiddenCharacters = [...forbiddenSpecial];
      setErrorMessage(`Caracteres especiais não são permitidos: ${forbiddenCharacters.join(', ')}`);
      return;
    }else {
      const encryptedText = encryptText(inputText);
      const transformedText = transformToLowerCase ? encryptedText.toLowerCase() : encryptedText;
      setOutputText(transformedText);
      setErrorMessage('');
    }   
  };


  const handleDecrypt = () => {
    const forbiddenUppercase = findUppercaseCharacters(inputText);
    const forbiddenSpecial = findSpecialCharacters(inputText);

    if(forbiddenUppercase.length > 0 && transformToLowerCase != true){
      const forbiddenCharacters = [...forbiddenUppercase];
      setErrorMessage(`Maiúsculas não são permitidas: ${forbiddenCharacters.join(', ')}`);
      return
    }else if (forbiddenSpecial.length > 0 ) {   
      const forbiddenCharacters = [...forbiddenSpecial];
      setErrorMessage(`Caracteres especiais não são permitidos: ${forbiddenCharacters.join(', ')}`);
      return;
    }else {
      const decryptedText = decryptText(inputText);
      const transformedText = transformToLowerCase ? decryptedText.toLowerCase() : decryptedText;
      setOutputText(transformedText);
      setErrorMessage('');
    } 
  };


  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setErrorMessage('');
    setTransformToLowerCase(false)
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

        <ContainerCheckbox>
        <label>
              <input
                type="checkbox"
                checked={transformToLowerCase}
                onChange={() => setTransformToLowerCase(!transformToLowerCase)}
              />
              Transformar maiúsculas para minúsculas.
            </label>
        </ContainerCheckbox>


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
