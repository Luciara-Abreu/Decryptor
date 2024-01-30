# Decryptor - Aplicativo de Criptografia



Bem-vindo ao Aplicativo de Criptografia! Este projeto oferece uma interface intuitiva para criptografar e descriptografar mensagens. Leia abaixo para entender as tecnologias utilizadas, as funcionalidades do aplicativo e como executá-lo.

## Tecnologias Utilizadas

- **React**: O aplicativo é desenvolvido usando a biblioteca React para criar uma interface de usuário reativa e eficiente.
- **JavaScript (ES6+)**: Todo o código é escrito em JavaScript moderno, aproveitando as funcionalidades mais recentes da linguagem.
- **CSS (styled-components)**: A estilização é feita com a biblioteca styled-components, permitindo um desenvolvimento de estilo baseado em componentes.
- **Node.js**: O projeto utiliza Node.js para gerenciar dependências e scripts.

## Introdução

Bem-vindo à documentação do aplicativo de criptografia! Este aplicativo foi desenvolvido para fornecer uma interface amigável para criptografar e descriptografar mensagens usando um algoritmo de criptografia simples.

## Funcionalidades

### Criptografia

O aplicativo suporta a criptografia de mensagens, garantindo que apenas letras minúsculas são permitidas. Caracteres especiais e letras maiúsculas não são aceitos durante o processo de criptografia.



#### Método

- **handleEncrypt()**: O método handleEncrypt() é acionado ao clicar no botão "Criptografar". Ele executa as seguintes etapas:

Validação de Caracteres Especiais e Maiúsculas:

Utiliza os métodos findUppercaseCharacters() e findSpecialCharacters() para identificar caracteres maiúsculos e especiais na entrada do usuário.
Se caracteres maiúsculos são encontrados e a opção de transformar para minúsculas não está ativada, exibe uma mensagem de erro indicando que maiúsculas não são permitidas.
Se caracteres especiais são encontrados, exibe uma mensagem de erro indicando que caracteres especiais não são permitidos.
Execução da Criptografia:

Se a validação passa, chama o método encryptText(inputText) para realizar a criptografia.
O texto criptografado é armazenado em encryptedText.
Transformação para Minúsculas (Opcional):

Se a opção de transformar para minúsculas estiver ativada, o texto criptografado é convertido para minúsculas.
Atualização do Estado:

O estado outputText é atualizado com o texto resultante.
A mensagem de erro é limpa.


- **handleDecrypt()**: O método handleDecrypt() é acionado ao clicar no botão "Descriptografar". Ele segue um processo semelhante ao método handleEncrypt():

Validação de Caracteres Especiais e Maiúsculas:

Utiliza os métodos findUppercaseCharacters() e findSpecialCharacters() para identificar caracteres maiúsculos e especiais na entrada do usuário.
Se caracteres maiúsculos são encontrados e a opção de transformar para minúsculas não está ativada, exibe uma mensagem de erro indicando que maiúsculas não são permitidas.
Se caracteres especiais são encontrados, exibe uma mensagem de erro indicando que caracteres especiais não são permitidos.
Execução da Descriptografia:

Se a validação passa, chama o método decryptText(inputText) para realizar a descriptografia.
O texto descriptografado é armazenado em decryptedText.
Transformação para Minúsculas (Opcional):

Se a opção de transformar para minúsculas estiver ativada, o texto descriptografado é convertido para minúsculas.
Atualização do Estado:

O estado outputText é atualizado com o texto resultante.
A mensagem de erro é limpa.

## Transformar para Minúsculas (Checkbox)
O checkbox "Transformar maiúsculas para minúsculas" oferece ao usuário a opção de converter automaticamente o texto resultante (criptografado ou descriptografado) para minúsculas. Essa opção é útil para manter uma consistência no formato do texto. Quando ativado, a transformação é aplicada aos resultados gerados pelos métodos handleEncrypt() e handleDecrypt().

- **handleClear()**: Ao clicar no botão "Limpar", todos os campos de entrada e saída são redefinidos para seus valores padrão.

### Copiar para a Área de Transferência

- **handleCopy()**: Copia o texto descriptografado ou criptografado para a área de transferência para facilitar o compartilhamento.

## Interface do Usuário

A interface do usuário é composta por duas áreas principais:

1. **Área de Entrada (Esquerda)**
   - Um campo de texto para inserir mensagens.

2. **Área de Saída (Direita)**
   - Uma área que exibe mensagens criptografadas ou descriptografadas.
   - Mensagens de erro são exibidas em vermelho para fornecer feedback ao usuário.

## Conclusão

Esperamos que este aplicativo de criptografia seja útil para suas necessidades.

Atenciosamente:
Lúci Abreu.
