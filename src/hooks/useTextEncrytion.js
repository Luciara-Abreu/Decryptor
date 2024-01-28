import { useState } from 'react';

const useTextEncryption = () => {
  const encryptText = (text) => {
    return text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  };

  const decryptText = (text) => {
    return text
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  };

  return { encryptText, decryptText };
};

export default useTextEncryption;
