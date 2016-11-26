import React from 'react';

import ChangeWeixinTitle from './ChangeWeixinTitle';

class WeixinTitle extends React.Component {
  componentDidMount() {
    this.changeTitle(this.props.title);
  }
  componentWillReceiveProps(nextProps) {
    this.changeTitle(nextProps.title);
  }
  changeTitle(title) {
    return new ChangeWeixinTitle(title, this.props.src);
  }
  render() {
    return (this.props.children || null);
  }
}

WeixinTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

WeixinTitle.defaultTypes = {
  src: '/favicon.ico',
};

export default WeixinTitle;
