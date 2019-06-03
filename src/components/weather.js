import React from 'react';

class Weather extends React.Component {
  render () {
    return (
      <div>
      { this.props.temp &&
      <div>
      Компонент с погодой

      <h4>Температура {this.props.temp}</h4>
      <h4>Город {this.props.city}</h4>
      <h4>Страна {this.props.country}</h4>
      <h4>Восход {this.props.sunrise}</h4>
      <h4>Закат {this.props.sunset}</h4>

      </div>
    }
    </div>
    )
  }
}
export default Weather;
