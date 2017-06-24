var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 class="text-center">It's it {temp} in {location}.</h3>

      <div id="openweathermap-widget-15">
          <link href="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/css/openweathermap-widget-right.min.css" rel="stylesheet"/>
          
          <div class="widget-right weather-right--type1 widget-right--brown">
              <div class="widget-right__header widget-right__header--brown">
                  <div class="widget-right__layout">
                      <h2 class="widget-right__title">London, GB</h2>
                      <p class="widget-right__description">light rain</p>
                  </div><img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/10d.png" width="128" height="128" alt="Weather in London, GB" class="weather-right__icon weather-right__icon--type1"/>
              </div>
              <div class="weather-right weather-right--brown">
                  <div class="weather-right__layout">
                      <div class="weather-right__temperature">21<span>°C</span></div>
                      <div class="weather-right__weather">
                          <div class="weather-right-card">
                              <table class="weather-right__table">
                                  <tbody>
                                      <tr class="weather-right__items">
                                          <th colspan="2" class="weather-right__item">Details</th>
                                      </tr>
                                      <tr class="weather-right__items">
                                          <td class="weather-right__item">Feels like</td>
                                          <td class="weather-right__item weather-right__feels">21<span>°C</span></td>
                                      </tr>
                                      <tr class="weather-right__items">
                                          <td class="weather-right__item">Wind</td>
                                          <td class="weather-right__item weather-right__wind-speed">7.2 m/s </td>
                                      </tr>
                                      <tr class="weather-right-card__items">
                                          <td class="weather-right__item">Humidity</td>
                                          <td class="weather-right__item weather-right__humidity">60%</td>
                                      </tr>
                                      <tr class="weather-right-card__items">
                                          <td class="weather-right__item">Precip</td>
                                          <td class="weather-right__item"></td>
                                      </tr>
                                      <tr class="weather-right-card__items">
                                          <td class="weather-right__item">Pressure</td>
                                          <td class="weather-right__item weather-right__pressure">1013 hPa</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="widget-right__footer widget-right__footer--brown">
                  <div class="widget-right__layout"><a href="https://openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>
                      <div class="widget-right__date">18:28 Jun 24</div>
                  </div>
              </div>
          </div>
          
      </div>

    </div>
    
  )
};

module.exports = WeatherMessage;
