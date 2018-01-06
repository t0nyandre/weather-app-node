const req = require('request');


var getWeather = (lat, lng, callback) => {
    req({
        url: `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}`,
        json: true 
     }, (error, response, body) => {
         if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
         } else {
            callback('Unable to fetch weather.');
         }
     });     
};

module.exports = {
    getWeather
}