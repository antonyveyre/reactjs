import React from 'react';

class Form extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" plcaceholder="Город"/>
        <button>получить погоду</button>
      </form>
    )
  }
}
export default Form;
