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


- 
## Como fazer o deploy de um projeto Create React App no GitHub Pages, você pode seguir os passos abaixo. Vou guiá-lo através do processo:

Dentro do seu projetom, instale a biblioteca gh-pages:

No terminal, navegue até o diretório do seu projeto React.

Execute o seguinte comando para instalar a biblioteca gh-pages:

bash
# Copy code
npm install gh-pages --save-dev
Atualize o arquivo package.json:

Abra o arquivo package.json do seu projeto.
Adicione as seguintes linhas ao nível superior do arquivo:

json
# Copy code
"homepage": "https://seunomeusuario.github.io/nomerepositorio",
Substitua "seunomeusuario" pelo seu nome de usuário do GitHub e "nomerepositorio" pelo nome do repositório que você criou.

- ![Tela exemplo](
  https://github.com/Luciara-Abreu/Decryptor/assets/36546342/ab7045a6-802c-4d12-9a52-3b1e76a89384
)

Adicione scripts ao package.json:
Adicione os seguintes scripts no arquivo scripts:

json
# Copy code
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
}

- ![Tela exemplo](
  https://github.com/Luciara-Abreu/Decryptor/assets/36546342/8bb83dbe-9667-4531-a2fb-bdb01a04ac1a
)

Faça o deploy do seu aplicativo:

No terminal, execute o seguinte comando para fazer o build e fazer o deploy para o GitHub Pages:

bash
# Copy code
npm run deploy
Verifique o GitHub Pages:

Após a conclusão do deploy, vá até as configurações do seu repositório no GitHub.
Role para baixo até a seção GitHub Pages.
Você deve ver uma mensagem indicando que seu site está publicado. O link para o seu site também será fornecido.

- ![Tela exemplo](
  https://github.com/Luciara-Abreu/Decryptor/assets/36546342/0d63ca2e-b9a7-476d-8808-004f344bcac0
)

- ![Tela exemplo](
 https://github.com/Luciara-Abreu/Decryptor/assets/36546342/35cafcde-f7c4-4393-afdc-7f9cd1c1dceb
)


Agora seu aplicativo React deve estar disponível em https://seunomeusuario.github.io/nomerepositorio. Lembre-se de substituir "seunomeusuario" e "nomerepositorio" pelos seus próprios detalhes.