# Decryptor - Aplicativo de Criptografia

Bem-vindo ao Decryptor - Seu Aplicativo de Criptografia Intuitivo!

Este projeto oferece uma interface intuitiva para criptografar e descriptografar mensagens de forma simples e segura. Continue lendo para descobrir as tecnologias utilizadas, as funcionalidades do aplicativo e como começar a utilizá-lo.

## Tecnologias Utilizadas
- **React**: Desenvolvemos o aplicativo utilizando a biblioteca React para criar uma interface de usuário reativa e eficiente.
- **JavaScript (ES6+)**: Todo o código é escrito em JavaScript moderno, aproveitando as funcionalidades mais recentes da linguagem.
- **CSS (styled-components)**: A estilização é feita com a biblioteca styled-components, permitindo um desenvolvimento de estilo baseado em componentes.
- **Node.js**: Utilizamos o Node.js para gerenciar dependências e scripts.

## Introdução
Bem-vindo à documentação do Decryptor, seu aplicativo de criptografia pessoal! Este aplicativo foi projetado para oferecer uma interface amigável e segura para criptografar e descriptografar mensagens usando um algoritmo simples.

## Funcionalidades
### Criptografia
O aplicativo suporta a criptografia de mensagens, permitindo apenas letras minúsculas. Caracteres especiais e letras maiúsculas não são aceitos durante o processo de criptografia.

#### Método `handleEncrypt()`
- **Validação de Caracteres Especiais e Maiúsculas**: Utilize os métodos `findUppercaseCharacters()` e `findSpecialCharacters()` para identificar caracteres maiúsculos e especiais. Exibe mensagens de erro apropriadas se necessário.
- **Execução da Criptografia**: Chama o método `encryptText(inputText)` para realizar a criptografia.
- **Transformação para Minúsculas (Opcional)**: O texto criptografado pode ser convertido para minúsculas, se necessário.
- **Atualização do Estado**: Atualiza o estado `outputText` com o texto resultante.

### Descriptografia
O aplicativo também suporta a descriptografia de mensagens criptografadas.

#### Método `handleDecrypt()`
- **Validação de Caracteres Especiais e Maiúsculas**: Similar à criptografia, exibe mensagens de erro apropriadas durante a validação.
- **Execução da Descriptografia**: Chama o método `decryptText(inputText)` para realizar a descriptografia.
- **Transformação para Minúsculas (Opcional)**: O texto descriptografado pode ser convertido para minúsculas, se necessário.
- **Atualização do Estado**: Atualiza o estado `outputText` com o texto resultante.

### Transformar para Minúsculas (Checkbox)
A caixa de seleção "Transformar para minúsculas" oferece ao usuário a opção de converter automaticamente o texto resultante para minúsculas.

#### Método `handleClear()`
Ao clicar no botão "Limpar", todos os campos de entrada e saída são redefinidos para seus valores padrão.

### Copiar para Área de Transferência
#### Método `handleCopy()`
Copia o texto descrito ou criptografado para a área de transferência para facilitar o compartilhamento.

## Interface do Usuário
A interface é composta por duas áreas principais:
- **Área de Entrada (Esquerda)**: Um campo de texto para inserir mensagens.
- **Área de Saída (Direita)**: Exibe mensagens criptografadas ou descritas. Mensagens de erro são destacadas em vermelho.

## Imagens de Plano de Fundo (Escolha a Sua!)
- ![Tela clara 1](https://github.com/Luciara-Abreu/Decryptor/assets/36546342/cf0dd657-6ba9-4f7c-a572-5663ab2f0e5b)
- ![Tela escura 2](https://github.com/Luciara-Abreu/Decryptor/assets/36546342/ac8b200f-412d-4012-a416-56a450e1fdc0)
- ![Tela imagem 3](https://github.com/Luciara-Abreu/Decryptor/assets/36546342/b121ec9b-6935-4198-a294-6a420a66874a)

## Conclusão
Esperamos que o Decryptor seja útil para suas necessidades de criptografia. Fique à vontade para explorar e experimentar!

Atenciosamente,
Lúci Abreu.
