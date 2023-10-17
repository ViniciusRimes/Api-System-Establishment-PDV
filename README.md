# API System Establishment PDV

## Descrição

A **API System Establishment PDV** é um sistema criado para estabelecimentos de venda, como supermercados, lojas de roupas, lojas de sapatos e outros. Este projeto foi desenvolvido para fins de estudo, utilizando tecnologias como Node.js, MySQL, Express e Sequelize, seguindo a arquitetura MVC.

## Funcionalidades

- Cadastro e login de empresas e usuários (colaboradores da empresa) com autenticação, utilizando a biblioteca JSON Web Token (JWT).
- Cadastro, edição e remoção de produtos da empresa.
- Sistema de carrinhos de compras: Criação de carrinhos e adição de produtos com a quantidade desejada.
- Sistema de controle de estoque com atualização a cada venda.

## Endpoints

### Estabelecimento

- `POST /establishment/register`: Cadastra um novo usuário.
- `POST /establishment/login`: Permite o login de um usuário existente.
- `GET /establishment/getuser`: Retorna informações de um usuário pelo token.
- `PATCH /establishment/edituser`: Atualiza as informações de um usuário existente usando o token.

### Produtos

- `POST /product/create`: Cadastra um novo produto.
- `DELETE /product/delete/:id`: Deleta um produto pelo ID.
- `PATCH /product/:id`: Edita um produto pelo ID.
- `GET /product/all`: Retorna todos os produtos cadastrados.
- `GET /product/q`: Retorna todos os produtos com base em uma busca.
- `GET /product/:id`: Retorna um produto pelo ID.
- `POST /product/addcart/:id`: Adiciona um produto ao carrinho com base no ID.
- `GET /product/getcart/:id`: Retorna informações de um carrinho pelo ID.
- `POST /product/updatestock/:id`: Atualiza o estoque dos produtos com base no ID do carrinho.
- `POST /product/expirationcart`: Atualiza a lista de carrinhos do sistema.

### Usuários
- `POST /users/register`: Cadastra um novo colaborador
- `POST /users/login`: Loga um colaborador existente 
- `POST /users/getusers`: Obtém todos os colaboradores

## Autenticação

A **API System Establishment PDV** utiliza autenticação baseada em tokens JWT (Json Web Token) para proteger os endpoints que requerem autorização. Abaixo, descrevemos como a autenticação funciona e como os usuários podem obter um token de autenticação.

### Obtendo um Token JWT

Para obter um token JWT e acessar os recursos protegidos, siga estas etapas:

1. Realize o cadastro como estabelecimento ou usuário da empresa.

2. Faça o login com suas credenciais utilizando o endpoint:

POST /establishment/login

Isso fornecerá um token JWT que deve ser incluído no cabeçalho de todas as solicitações autenticadas.

### Usando o Token JWT

Uma vez que você tenha obtido um token JWT, inclua-o no cabeçalho de suas solicitações para acessar os endpoints protegidos. O cabeçalho deve ser definido da seguinte forma:

Authorization: Bearer __SEU_TOKEN_JWT_AQUI__

Isso permitirá o acesso aos recursos autorizados pela API.

### Expiração do Token

Os tokens JWT geralmente têm um tempo de vida limitado. Certifique-se de que seu token esteja atualizado para evitar a expiração. Caso contrário, você precisará obter um novo token fazendo login novamente.

## Exemplo de Solicitação Autenticada

Aqui está um exemplo de como fazer uma solicitação autenticada utilizando o token JWT no cabeçalho:

```http
GET /product/all
Authorization: Bearer __SEU_TOKEN_JWT_AQUI__

__Possíveis Erros de Autenticação__
Caso ocorram erros de autenticação, a API retornará as mensagens de erro apropriadas para ajudar a solucionar problemas de autenticação.

Certifique-se de proteger seu token JWT e nunca compartilhá-lo publicamente. Mantenha suas credenciais seguras para garantir a segurança da sua conta.

Lembre-se de que esta é uma visão geral da autenticação na API System Establishment PDV. Certifique-se de consultar a documentação completa para obter detalhes adicionais e exemplos.


Certifique-se de substituir "SEU_TOKEN_JWT_AQUI" pelo token real em seus exemplos e fornecer informações detalhadas na documentação completa.


## Pré-requisitos

Antes de começar a usar a API System Establishment PDV, verifique se você atende aos seguintes pré-requisitos:

- Node.js e npm (gerenciador de pacotes Node.js) instalados em seu sistema. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- Um banco de dados MySQL configurado e acessível.
- Um ambiente de desenvolvimento ou servidor onde você possa implantar a API.

## Instalação

Siga estas etapas para instalar e configurar a API System Establishment PDV:

1. Clone o repositório a partir do GitHub:

   ```shell
   git clone https://github.com/seu-usuario/api-system-establishment-pdv.git


Contribuição
Se você deseja permitir que outras pessoas contribuam para o seu projeto, explique como elas podem fazê-lo.

Licença
Declare a licença sob a qual seu projeto é lançado. Exemplo: MIT License.

Contato
Forneça informações de contato para você ou sua equipe.

Exemplos
Se você tiver exemplos de código ou casos de uso da sua API, inclua-os aqui.

Isso é apenas um exemplo de como você pode estruturar o README. Certifique-se de adaptá-lo às necessidades específicas do seu projeto. Um README bem elaborado pode ser uma ferramenta valiosa para ajudar os usuários a entender e usar sua API.