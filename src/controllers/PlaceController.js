var Promise = require('promise')
var fetch = require('node-fetch')

const {apiKey} = require('../utils/googleapi');

module.exports = {
  async index (req, res, next) {
      
    const {lat, lng} = req.body

    const location = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${apiKey}`
    const gasstation = `https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${lng}&radius=10000&type=gas_station&key=${apiKey}`

    Promise.all([
        fetch(location).then(function(response){ return response.json() }),
            fetch(gasstation).then(function(response){ return response.json() }),
        ]).then(allResponses => {
            
        // Filtering results
        const fullLocationResponse = allResponses[0].results[0].address_components;
        const fullGasStationsLocationResponse = allResponses[1].results;

        // Values from each fiel to variable
        const addressNumber = fullLocationResponse.filter(index => (index.types == "street_number"))
        const addressRoute = fullLocationResponse.filter(index => (index.types == "route"))
        const addressNeighborhood  = fullLocationResponse.filter(index => (index.types[0] == "political"))
        const addressCity = fullLocationResponse.filter(index => (index.types[0] == "administrative_area_level_2"))
        const addressState = fullLocationResponse.filter(index => (index.types[0] == "administrative_area_level_1"))
        const addressPostalCode  = fullLocationResponse.filter(index => (index.types == "postal_code"))

        // Structure of the address object
        const endereco = {
            "estado": addressState[0] .short_name,
            "cidade": addressCity[0].short_name,
            "bairro": addressNeighborhood[0].short_name,
            "logradouro": addressRoute[0].short_name,
            "numero": addressNumber[0].short_name,
            "cep": addressPostalCode[0].short_name 
        }

        const postos = fullGasStationsLocationResponse.map(station => (
            {
                "lat": station.geometry.location.lat,                 
                "lng": station.geometry.location.lat,
                "nome": station.name,
                "endereco": station.vicinity
           }
        ))

        return res.json({lat, lng, endereco, postos})
        });
       
  }
}



        //  for(let i = 0; i <= fullGasStationsLocationResponse.length; i++){
        //      var postos = {
        //          "lat": fullGasStationsLocationResponse[i].geometry.location.lat,                 
        //          "lng": fullGasStationsLocationResponse[i].geometry.location.lat,
        //          "nome": fullGasStationsLocationResponse[i].name,
        //          "endereco": fullGasStationsLocationResponse[i].vicinity
        //     }
        // }
