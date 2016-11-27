import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import { WeixinTitle } from '../../../src';

class GettingStarted extends React.Component {
  render() {
    return (
      <WeixinTitle title="Getting Started" src="/react-weixin-title/favicon.ico">
        <div className="page">
          <h2>Installation</h2>
          <p>Via <a href="https://www.npmjs.com/" target="_blank">npm</a>:</p>
          <SyntaxHighlighter language='bash' style={monokaiSublime}>
          $ npm install react-weixin-title --save
          </SyntaxHighlighter>
          <p>Dependencies:<br />React >= 0.14.0<br />React-dom >= 0.14.0</p>
          <h2>Example</h2>
          <h3>Assuming you use something like <a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a></h3>
          <SyntaxHighlighter language='javascript' style={monokaiSublime}>
            {`import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App';
import Home from './routes/Home';
import GettingStarted from './routes/GettingStarted';

import './styles/styles.scss';

const title = 'React Weixin Title'; //your title here
const src = '/favicon.ico'; //a valid url, i.e. '/favicon.ico'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={() => new ChangeWeixinTitle(title, src)} />
      <Route path="getting-started" component={GettingStarted} />
    </Route>
  </Router>
), document.getElementById('app'));`}
          </SyntaxHighlighter>
          <h3>Or use WeixinTitle component</h3>
          <SyntaxHighlighter language='javascript' style={monokaiSublime}>
          {`import React from 'react';
import {WeixinTitle} from 'react-weixin-title';

const title = 'your title here'; //your title here
const src = '/favicon.ico'; //a valid url, i.e. favicon.ico

class Demo extends React.Component {
  render() {
    return (
      <WeixinTitle title={title} src={src}>
        //your code here
      </WeixinTitle>
    )
  }
}
`}
          </SyntaxHighlighter>
        </div>
      </WeixinTitle>
    )
  }
}

export default GettingStarted;
