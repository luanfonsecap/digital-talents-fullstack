# Desafio Full Stack Digital Talents

Aplicação frontend em React para consumo de API em NodeJS.

## Começando

Para inicar a aplicação clone ou faça download do repositório completo.

### Pré-requesitos

É necessário ter instalado em sua máquina:
NodeJS na versão 10.16.3
Banco de dados MySQL Workbench

### Instalando

Ao descarregar o projeto em sua máquina faça os seguintes comandos:

```
cd backend
yarn install
cd ..
cd frontend
yarn install
```

É necessário alterar as configurações para criação do banco de dados:

```
cd backend
cd src
cd config
code .
```
Altere as propriedades de configuração do arquivo "database.js" para o localhost de acordo com sua máquina, 
e senha do banco de dados.


Para iniciar o servidor e a aplicação react, faça os comandos em suas respectivas pastas:

```
cd backend
yarn sequelize db:create
yarn sequelize db:migrate
yarn dev
```

```
cd frontend
yarn start
```
