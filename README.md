# React Weixin Title
Provides a declarative way to specify document.title in a single-page app.  
This component can be used on weixin for iOS as well.

## Installation
```sh
npm install --save react-weixin-title
```

## Example
Assuming you use something like [react-router](https://github.com/ReactTraining/react-router):

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { ChangeWeixinTitle } from 'react-weixin-title';

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
), document.getElementById('app'));
```
Or use WeixinTitle component

```javascript
import React from 'react';
import { WeixinTitle } from 'react-weixin-title';

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
```

## Live Demo
![react-weixin-title](https://raw.githubusercontent.com/yahiousun/react-weixin-title/master/example/images/qrcode.jpg)

## References
[微信前端开发有哪些坑或者黑魔法？](https://www.zhihu.com/question/27849091#)

## License
Copyright © 2016 yahiousun. This source code is licensed under the MIT license found in the [LICENSE](https://github.com/yahiousun/react-weixin-title/blob/master/LICENSE) file.