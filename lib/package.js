import ReactDOM from 'react-dom';
import React from 'react';
import CustomTitlePanel from './CustomTitlePanel';

export default class Package {

  activate() {
    console.log('*> do activate plugin Custom Title Panel');
    this.el = document.createElement('div');

    ReactDOM.render(
      <CustomTitlePanel />,
      this.el
    );

    atom.workspace.addHeaderPanel({
      item: this.el,
      visible: true,
      priority: 0
    });
  }

  deactivate() {
  }

  serialize() {
    return {};
  }

  toggle() {
  }

}
