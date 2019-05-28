import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div>{ this.props.label.replace('&', '') }</div>
    );
  }
}
