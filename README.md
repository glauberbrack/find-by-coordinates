## API DOCUMENTATION

:rocket: Development test with Node.js from Pixter. 

## Build an API that can find address and near gas stations by latitude and longitude

### Google URL to search address:

```
https://maps.googleapis.com/maps/api/geocode/json?latlng=-23.5655625,-46.6472389&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

### Google URL to search gas stations:

```
https://maps.googleapis.com/maps/api/place/search/json?location=-23.5655625,-46.6472389&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

### Request:

```json
  {
      "lat": "-23.5655625",
      "lng": "-46.6472389"
  }
```

### Response:

```json
  {
    "lat": "-23.5655625",
    "lng": "-46.6472389",
      "endereco": {
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Bela Vista",
        "logradouro": "Avenida Paulista",
        "numero": "1374",
        "cep": "01310100" //se existir
      },
      "postos": [
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        ...
      ]
  }
```

### Requisitos:

- Desenvolver em Javascript, nativo ou utilizando qualquer framework da linguagem
- Promise
- Promise All
- Filter
- Map
- Object.assign()

### Entrega:

- Faça um _**fork**_ deste repositório
- Desenvolva sua aplicação
- Envie as atualizações para seu repositório
- Envie-nos um e-mail confirmando a finalização junto com o _**link do repositório**_

### Importante não utilizar bibliotecas



## :rocket: Techs

- [Node.js](https://nodejs.org/en/)
- [Express](https://www.typescriptlang.org/)
- [Nodemon](https://nodemon.io/)

- [Axios](https://www.npmjs.com/package/axios)

