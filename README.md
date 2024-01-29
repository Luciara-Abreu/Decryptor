# Aplicativo de Criptografia

![Tela do Aplicativo](assets/telaPrincipal.jpg)

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

- **handleEncrypt()**: Este método é acionado ao clicar no botão "Criptografar". Ele verifica se a entrada contém apenas letras minúsculas e, em seguida, utiliza o algoritmo de criptografia para produzir o texto criptografado.

### Descriptografia

O aplicativo permite descriptografar mensagens previamente criptografadas. Da mesma forma, apenas letras minúsculas são permitidas durante o processo de descriptografia.

#### Método

- **handleDecrypt()**: Acionado ao clicar no botão "Descriptografar", verifica se a entrada contém apenas letras minúsculas e realiza a descriptografia.

### Limpar

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

## Instalação e Execução

Para utilizar o aplicativo, siga estas etapas:

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o aplicativo com `npm start`.

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Conclusão

Esperamos que este aplicativo de criptografia seja útil para suas necessidades. Se você tiver dúvidas ou sugestões, não hesite em entrar em contato conosco.

Obrigado por escolher nosso aplicativo de criptografia!
