import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
        <div className="link-item">
            <li className="link">
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        </div>
    );
  }
}

export default Link;
