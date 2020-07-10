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

`GET /place`: Return the first address and all the gas stations nearby

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
        "cep": "01310100" "If exists"
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
        "..."
      ]
  }
```

## :rocket: Techs

- [Node.js](https://nodejs.org/en/)
- [Express](https://www.typescriptlang.org/)
- [Nodemon](https://nodemon.io/)

## :notebook: Running

### Requeriments

```bash
# Clone this
$ git clone https://github.com/glauberbrack/find-by-coordinates

# Go to your project folder
$ cd find-by-coordinates

# Install all depencies
$ npm install

# Run your project
$ npm start
```