import React from 'react';

import { WeixinTitle } from '../../../src';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Weixin Title'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      title: 'React Weixin Title'
    })
  }
  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <WeixinTitle title={this.state.title} src="/react-weixin-title/favicon.ico">
        <div className="page">
          <h2>React Weixin Title</h2>
          <p className="site-description">Provides a declarative way to specify document.title in a single-page app.  
This component can be used on weixin for iOS as well.</p>
          <div className="demo">
            <form className="demo-form" onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.title} className="demo-input" onChange={this.handleChange} autoFocus="true" />
            </form>
          </div>
          <div className="show-lg">
            <h2>View on mobile</h2>
            <p>
              <img src={require('../../images/qrcode.jpeg')} width="200" height="200" />
            </p>
          </div>
          <h2>References</h2>
          <ul className="listview">
            <li><a href="https://www.zhihu.com/question/27849091#" target="_blank">微信前端开发有哪些坑或者黑魔法？</a></li>
          </ul>
        </div>
      </WeixinTitle>
    )
  }
}

export default Home;
