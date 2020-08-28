# Tribo API

Projeto tem como objetivo criar uma api para o comunidade tribo do gaules.

## Pré-requisitos

Para o funcionamento do projeto, você tem que ter instalado em sua máquina:

- NodeJs
- Yarn ou NPM
- Docker

## Instalação

Na pasta do projeto, rodar os comandos abaixo:

Instalando a aplicação.

```js
yarn install
```

Rodando o banco de dados

```
docker-compose up -d
```

Copiar o arquivo `.env.example` e renomear para `.env`.

Rodar o camando abaixo para gerar uma nova chave.

```
adonis key:generate
```

Rodando as migrations

```
adonis migration:run
```

Rodando a aplicação em modo de desenvolvimento

```
adonis serve --dev
```

**Para modificar a documentação, alterar o arquivo config/swagger.js**

## Membros Core

- Carlos Pedroso
- Gabriel Carvalho
- Lucas Pinheiro
- Matheus Torres
- [Pedro Victor](https://github.com/stormsamurai1)
- [Renê Soares](https://github.com/renesoaresse)
- [BrunoSana](https://github.com/brunosana)
- Rodrigo Santos
- Slitaz
- Victor Garcia

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.
