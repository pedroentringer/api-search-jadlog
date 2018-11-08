# API - Rastreio JadLog

Rastreio de conhecimento jadlog, cada consulta retorna um JSON.

## Installation

Baixe o projeto em seu computador, abra a pasta com os arquivos e execute:

```bash
npm i
node index.js
```

## Usando
Para rastrear um CT-e basta utilizar o link {seu-dominio}/jadlog/rastreio/{cte}
```bash
localhost:3000/jadlog/rastreio/123
ou
localhost:3000/jadlog/rastreio/dev/123
```

## Retorno - Sucesso
```JSON
{"status":true,"message":"Rastreamento CT-e 100827475452722222","tracking":[{"documento":"","data":"05/11/2018","hora":"17:03","origem":"PA VITORIA 01","status":"EMISSAO","destino":"PA VITORIA 01"},{"documento":"10092740020714","data":"05/11/2018","hora":"17:06","origem":"PA VITORIA 01","status":"UNITIZADO","destino":"PA VITORIA 01"},{"documento":"27405111800056","data":"05/11/2018","hora":"17:08","origem":"PA VITORIA 01","status":"TRANSFERENCIA","destino":"TECA JAD SAO"},{"documento":"94606111800113","data":"06/11/2018","hora":"09:44","origem":"FL VITORIA","status":"TRANSFERENCIA","destino":"FL RIO DE JANEIRO"},{"documento":"00706111801695","data":"06/11/2018","hora":"23:33","origem":"FL RIO DE JANEIRO","status":"TRANSFERENCIA","destino":"TECA JAD SAO"},{"documento":"","data":"07/11/2018","hora":"13:01","origem":"TECA JAD SAO","status":"ENTRADA","destino":"TECA JAD SAO"}]}
```

## Retorno - Erro
```JSON
{"status":false,"message":"Não existe tracking para este conhecimento"}
```
