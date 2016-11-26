import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import { WeixinTitle } from '../../../src';

class GettingStarted extends React.Component {
  render() {
    return (
      <WeixinTitle title="Getting Started" src="/favicon.ico">
        <div className="page">
          <h2>Installation</h2>
          <p>Via npm:</p>
          <SyntaxHighlighter language='bash' style={monokaiSublime}>
          $ npm install react-weixin-title --save
          </SyntaxHighlighter>
          <p>Dependencies:<br />React >= 0.14.0<br />React-dom >= 0.14.0</p>
          <h2>Example</h2>
          <h3>With React Router</h3>
          <SyntaxHighlighter language='javascript' style={monokaiSublime}>
            {`import {ChangeWeixinTitle} from 'react-weixin-title';

<Route
  component={Home}
  onEnter={() => { return new ChangeWeixinTitle('Hello ChangeWeixinTitle!', 'your iframe url here') }}
/>`}
          </SyntaxHighlighter>
          <h3>WeixinTitle component</h3>
          <SyntaxHighlighter language='javascript' style={monokaiSublime}>
          {`import React from 'react';
import {WeixinTitle} from 'react-weixin-title';

const title = 'your title here';
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
