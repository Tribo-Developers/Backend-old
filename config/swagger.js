'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: 'Documentação BackEnd da Tribo',
        version: '1.0',
      },
  
      basePath: '/',
      "tags": [
        {
          "name": "time",
          "description": "Operações para a Tabela Time"
        },
        {
          "name": "campeonato",
          "description": "Operações para a Tabela Campeonatos"
        },
        {
          "name": "timecamp",
          "description": "Operações para a Tabela TimeCamp"
        },
        {
          "name": "partidas",
          "description": "Operações para a Tabela Partida"
        }
      ],
      "schemes": [
        "https",
        "http"
      ],

  "paths": {
    "/time": {
      "get": {
        "tags": [
          "time"
        ],
        "summary": "Retorna os times cadastrados no Banco de Dados",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Time"
              }
            }
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "post": {
        "tags": [
          "time"
        ],
        "summary": "Adiciona um time no Banco de Dados",
        "operationId": "addTime",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "Time",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRTime"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Time"
            }
          },
          "500": {
            "description": "Dado não inserido"
          }
        }
      }
    },
    "/time/{id}": {
      "get": {
        "tags": [
          "time"
        ],
        "summary": "Retorna o time do Banco de Dados referente ao ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do time",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Time"
            }
          },
          "204": {
            "description": "No Content"
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "put": {
        "tags": [
          "time"
        ],
        "summary": "Altera um time no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do time",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "Time",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRTime"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      },
      "delete": {
        "tags": [
          "time"
        ],
        "summary": "Exclui um time do Banco de Dados",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do time",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      }
    },
    "/campeonato": {
      "get": {
        "tags": [
          "campeonato"
        ],
        "summary": "Retorna os campeonatos cadastrados no Banco de Dados",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Campeonato"
              }
            }
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "post": {
        "tags": [
          "campeonato"
        ],
        "summary": "Adiciona um campeonato no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "Campeonato",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRCampeonato"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Campeonato"
            }
          },
          "500": {
            "description": "Dado não inserido"
          }
        }
      }
    },
    "/campeonato/{id}": {
      "get": {
        "tags": [
          "campeonato"
        ],
        "summary": "Retorna o campeonato do Banco de Dados referente ao ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do campeonato",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Campeonato"
            }
          },
          "204": {
            "description": "No Content"
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "put": {
        "tags": [
          "campeonato"
        ],
        "summary": "Altera um campeonato no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do campeonato",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "Campeonato",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRCampeonato"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      },
      "delete": {
        "tags": [
          "campeonato"
        ],
        "summary": "Exclui um campeonato do Banco de Dados",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do campeonato",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      }
    },
    "/timecamp": {
      "get": {
        "tags": [
          "timecamp"
        ],
        "summary": "Retorna as relações entre o time e o campeonato que está participando",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/TimeCamp"
              }
            }
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "post": {
        "tags": [
          "timecamp"
        ],
        "summary": "Cria uma relação entre um time e um campeonato",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "TimeCamp",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRTimeCamp"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/TimeCamp"
            }
          },
          "500": {
            "description": "Dado não inserido"
          }
        }
      }
    },
    "/timecamp/{id}": {
      "get": {
        "tags": [
          "timecamp"
        ],
        "summary": "Retorna a relação entre um time e um campeonato do Banco de Dados referente ao ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do campeonato",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/TimeCamp"
            }
          },
          "204": {
            "description": "No Content"
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "put": {
        "tags": [
          "timecamp"
        ],
        "summary": "Altera a relação entre um time e um campeonato no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do objeto/relação",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "TimeCamp",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRTimeCamp"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      },
      "delete": {
        "tags": [
          "timecamp"
        ],
        "summary": "Exclui uma relação entre um time e um campeonato do Banco de Dados",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do objeto/relação",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      }
    },
    "/partidas": {
      "get": {
        "tags": [
          "partidas"
        ],
        "summary": "Retorna as partidas cadastradas no Banco de Dados",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Partida"
              }
            }
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "post": {
        "tags": [
          "partidas"
        ],
        "summary": "Adiciona uma partida no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "Partida",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRPartida"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Partida"
            }
          },
          "500": {
            "description": "Dado não inserido"
          }
        }
      }
    },
    "/partidas/{id}": {
      "get": {
        "tags": [
          "partidas"
        ],
        "summary": "Retorna a partida do Banco de Dados referente ao ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID da partida",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Partida"
            }
          },
          "204": {
            "description": "No Content"
          },
          "500": {
            "description": "Erro ao capturar dados"
          }
        }
      },
      "put": {
        "tags": [
          "partidas"
        ],
        "summary": "Altera uma partida no Banco de Dados",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID da partida",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "Partida",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CRPartida"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      },
      "delete": {
        "tags": [
          "partidas"
        ],
        "summary": "Exclui uma partida do Banco de Dados",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID da partida",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "1 se OK | 0 se Erro"
          },
          "500": {
            "description": "Erro ao fazer a operação"
          }
        }
      }
    }
  },
  "definitions": {
    "CRTime": {
      "type": "object",
      "required": [
        "Nome",
        "Logo",
        "Jogador1",
        "Jogador2",
        "Jogador3",
        "Jogador4",
        "Jogador5",
        "Coach"
      ],
      "properties": {
        "Nome": {
          "type": "string"
        },
        "Logo": {
          "type": "string"
        },
        "Jogador1": {
          "type": "string"
        },
        "Jogador2": {
          "type": "string"
        },
        "Jogador3": {
          "type": "string"
        },
        "Jogador4": {
          "type": "string"
        },
        "Jogador5": {
          "type": "string"
        },
        "Coach": {
          "type": "string"
        }
      },
      "xml": {
        "name": "Time"
      }
    },
    "Time": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "Nome": {
          "type": "string"
        },
        "Logo": {
          "type": "string"
        },
        "Jogador1": {
          "type": "string"
        },
        "Jogador2": {
          "type": "string"
        },
        "Jogador3": {
          "type": "string"
        },
        "Jogador4": {
          "type": "string"
        },
        "Jogador5": {
          "type": "string"
        },
        "Coach": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "xml": {
        "name": "Time"
      }
    },
    "CRCampeonato": {
      "type": "object",
      "required": [
        "Nome",
        "Inicio",
        "Fim"
      ],
      "properties": {
        "Nome": {
          "type": "string"
        },
        "Inicio": {
          "type": "string",
          "format": "date-time"
        },
        "Fim": {
          "type": "string",
          "format": "date-time"
        }
      },
      "xml": {
        "name": "Campeonato"
      }
    },
    "Campeonato": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "Nome": {
          "type": "string"
        },
        "Inicio": {
          "type": "string",
          "format": "date-time"
        },
        "Fim": {
          "type": "string",
          "format": "date-time"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "xml": {
        "name": "Campeonato"
      }
    },
    "CRTimeCamp": {
      "type": "object",
      "required": [
        "Time",
        "Campeonato"
      ],
      "properties": {
        "Time": {
          "type": "string"
        },
        "Campeonato": {
          "type": "string"
        }
      }
    },
    "TimeCamp": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "Time": {
          "type": "string"
        },
        "Campeonato": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "CRPartida": {
      "type": "object",
      "required": [
        "inicio",
        "Time1",
        "Time2",
        "Campeonato",
        "MD",
        "Jogo_Brasil",
        "Banner_Jogo"
      ],
      "properties": {
        "inicio": {
          "type": "string",
          "format": "date-time"
        },
        "Time1": {
          "type": "string"
        },
        "Time2": {
          "type": "string"
        },
        "Campeonato": {
          "type": "string"
        },
        "MD": {
          "type": "integer"
        },
        "Jogo_Brasil": {
          "type": "boolean",
          "default": false
        },
        "Banner_Jogo": {
          "type": "string"
        }
      }
    },
    "Partida": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "inicio": {
          "type": "string",
          "format": "date-time"
        },
        "Time1": {
          "type": "string"
        },
        "Time2": {
          "type": "string"
        },
        "Campeonato": {
          "type": "string"
        },
        "MD": {
          "type": "integer"
        },
        "Jogo_Brasil": {
          "type": "boolean",
          "default": false
        },
        "Banner_Jogo": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "xml": {
        "name": "Order"
      }
    }
  }
      // Example security definitions.

    },

    // Path to the API docs
    // Sample usage
    // apis: [
    //    'docs/**/*.yml',    // load recursive all .yml file in docs directory
    //    'docs/**/*.js',     // load recursive all .js file in docs directory
    // ]
    apis: [
      //'app/**/*.js',
      'docs/swagger.yaml',
      'start/routes.js'
    ]
  }
}