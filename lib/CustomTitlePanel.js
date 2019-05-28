import React from 'react';

import Menu from './Menu';

export default class CustomTitlePanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'undefined title',
      menuItems: atom.menu.template
    };

    setInterval(
      () => {
        if (this.state.title !== atom.document.title) {
          this.setState({ title: atom.document.title });
        }
      },
      250
    );
  }

  render() {
    return (
      <div class="custom-title-panel">
        <div class="icon">
          <span class="icon icon-code"></span>
        </div>
        <div class="menu">
          { this.state.menuItems.map(
            (props) => <Menu { ...props }/>
          ) }
        </div>
        <div class="title">{ this.state.title }</div>
        <div class="control">Control</div>
      </div>
    )
  }
}
