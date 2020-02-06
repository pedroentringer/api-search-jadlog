# API - Rastreio JadLog

API for tracking loads on the JadLog portal

## Installation

Download the project to your computer, open the folder with the files and run:

```bash
yarn i
node index
```

## How to use
To track a CT-e just use the link {your-domain}/jadlog/rastreio/{cte}
```bash
localhost:3000/jadlog/rastreio/123
ou
localhost:3000/jadlog/rastreio/dev/123
```

## Response - Success
```JSON
{"status":true,"message":"Rastreamento CT-e 100827475452722222","tracking":[{"documento":"","data":"05/11/2018","hora":"17:03","origem":"PA VITORIA 01","status":"EMISSAO","destino":"PA VITORIA 01"},{"documento":"10092740020714","data":"05/11/2018","hora":"17:06","origem":"PA VITORIA 01","status":"UNITIZADO","destino":"PA VITORIA 01"},{"documento":"27405111800056","data":"05/11/2018","hora":"17:08","origem":"PA VITORIA 01","status":"TRANSFERENCIA","destino":"TECA JAD SAO"},{"documento":"94606111800113","data":"06/11/2018","hora":"09:44","origem":"FL VITORIA","status":"TRANSFERENCIA","destino":"FL RIO DE JANEIRO"},{"documento":"00706111801695","data":"06/11/2018","hora":"23:33","origem":"FL RIO DE JANEIRO","status":"TRANSFERENCIA","destino":"TECA JAD SAO"},{"documento":"","data":"07/11/2018","hora":"13:01","origem":"TECA JAD SAO","status":"ENTRADA","destino":"TECA JAD SAO"}]}
```

## Response - Error
```JSON
{"status":false,"message":"Não existe tracking para este conhecimento"}
```
