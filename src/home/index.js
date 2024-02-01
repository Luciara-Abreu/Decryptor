import React, { useState } from 'react';
import useTextEncryption from '../hooks/useTextEncrytion';
import atencao from '../assets/interrogacao.png'
import pessoa from '../assets/pessoa.svg'
import pessoablack from '../assets/homem-sem-rosto-procurando.gif'
import pessoaImage from '../assets/guerreiro-horda.gif'
import wow from '../assets/Luci5-removebg-preview.png'
import alura from '../assets/alura_oracle.mp4'
import oracle from '../assets/alura-logo-escuro.mp4'

import {
  ContainerHeader, ContainerMain, ContainerLeft, ContainerText, ContainerButtons,
  ContainerRight, ContainerImag, ContainerResult, ContainerInformation, ContainerCheckbox,
  ContainerButtonsTheme
} from './styles';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { encryptText, decryptText } = useTextEncryption();
  const [transformToLowerCase, setTransformToLowerCase] = useState(false);
  const [theme, setTheme] = useState('claro');

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

    if (forbiddenUppercase.length > 0 && transformToLowerCase !== true) {
      const forbiddenCharacters = [...forbiddenUppercase];
      setErrorMessage(`Maiúsculas não são permitidas: ${forbiddenCharacters.join(', ')}`);
      return
    } else if (forbiddenSpecial.length > 0) {
      const forbiddenCharacters = [...forbiddenSpecial];
      setErrorMessage(`Caracteres especiais não são permitidos: ${forbiddenCharacters.join(', ')}`);
      return;
    } else {
      const encryptedText = encryptText(inputText);
      const transformedText = transformToLowerCase ? encryptedText.toLowerCase() : encryptedText;
      setOutputText(transformedText);
      setErrorMessage('');
    }
  };

  const handleDecrypt = () => {
    const forbiddenUppercase = findUppercaseCharacters(inputText);
    const forbiddenSpecial = findSpecialCharacters(inputText);

    if (forbiddenUppercase.length > 0 && transformToLowerCase !== true) {
      const forbiddenCharacters = [...forbiddenUppercase];
      setErrorMessage(`Maiúsculas não são permitidas: ${forbiddenCharacters.join(', ')}`);
      return
    } else if (forbiddenSpecial.length > 0) {
      const forbiddenCharacters = [...forbiddenSpecial];
      setErrorMessage(`Caracteres especiais não são permitidos: ${forbiddenCharacters.join(', ')}`);
      return;
    } else {
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

  const themeDefault = () => {
    setTheme('claro');
  };

  const themeDark = () => {
    setTheme('escuro');
  };

  const themeImage = () => {
    setTheme('imagem');
  };

  const themeImages = {
    claro: pessoa,
    escuro: pessoablack,
    imagem: pessoaImage,
  };

  const logosImages = {
    claro: alura,
    escuro: oracle,
    imagem: wow,
  };

  return (

    <ContainerMain theme={theme}>
      <ContainerLeft>
        <ContainerHeader>
          {theme === 'claro' && <video autoPlay loop muted>
            <source src={logosImages[theme]} type="video/mp4" className='claro' />
            Seu navegador não suporta o elemento de vídeo.
          </video>}

          {theme === 'escuro' && <video autoPlay loop muted>
            <source src={logosImages[theme]} type="video/mp4" className='escuro' />
            Seu navegador não suporta o elemento de vídeo.
          </video>}

          
          {theme === 'imagem' && <img src={logosImages[theme]} className='imagem' alt='Logo Luci Wow' />}

          <ContainerButtonsTheme>
            <button onClick={themeDefault} className='button-default'>Claro</button>
            <button onClick={themeDark} className='button-dark'>Escuro</button>
            <button onClick={themeImage} className='button-image'>Imagem</button>
          </ContainerButtonsTheme>
        </ContainerHeader>

        <ContainerText>
          <textarea
            placeholder="Digite seu texto..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </ContainerText>

        <ContainerCheckbox theme={theme}>
          <div className='atencao'>
            <img src={atencao} className='image-atencao' alt="imagem de atençao" />
            Apenas letras minúsculas e sem acento.
          </div>

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
            <ContainerImag theme={theme}>
              {theme === 'claro' && <img src={themeImages[theme]} className='claro' alt='thema claro' />}
              {theme === 'escuro' && <img src={themeImages[theme]} className='escuro' alt='thema escuro' />}
              {theme === 'imagem' && <img src={themeImages[theme]} className='imagem' alt='thema com uma imagem' />}
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
