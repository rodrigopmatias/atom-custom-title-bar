import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      top: 0,
      left: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log([e.target.offsetLeft, e.target.offsetTop]);
    this.setState({
      visible: true,
      left: e.target.offsetLeft,
      top: e.target.offsetTop + 30
    });
  }

  submenuStyle() {
    return {
      width: '300px',
      zIndex: 20,
      background: '#111',
      border: '1px solid #333',
      position: 'absolute',
      top: `${this.state.top}px`,
      left: `${this.state.left}px`,
      boxShadow: '5px 5px 5px 2px #222'
    }
  }

  render() {
    console.log(this.props);

    return (
      <div onClick={this.handleClick}>
        { this.props.label.replace('&', '') }

        {this.state.visible && (
          <div style={ this.submenuStyle() }>
            { this.props.submenu.map((item, index) => {
              return (
                item.type === 'separator' ?
                (<div key={index} style={{borderTop: '1px solid #333'}}></div>) :
                (
                  <div key={index} style={{display: 'flex'}}>
                    <div style={{flex: 1}}>{ item.label.replace('&', '') }</div>
                    <div style={{width: "80px", textAlign: 'right'}}>KeyMap</div>
                  </div>))
            }) }
          </div>
        )}
      </div>
    );
  }
}
