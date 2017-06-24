var axios = require('axios');

const AUTO_COMPLETE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&language=en_US&key=AIzaSyB_z6HWVIBVgbJmTr-E6Cm_tsUHcMpk76w';

module.exports = {
  getTemp: function (location) {
      location = 'Banga';
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${AUTO_COMPLETE_URL}&input=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        console.log(res);
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}

