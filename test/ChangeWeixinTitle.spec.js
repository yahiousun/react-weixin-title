import { expect } from 'chai';

import ChangeWeixinTitle from '../src/ChangeWeixinTitle';

const WEIXIN_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/0.10.102800 MicroMessenger/6.3.9 Language/zh_CN webview/0';

describe('ChangeWeixinTitle', () => {
  let changeWeixinTitle;

  beforeEach(() => {
    changeWeixinTitle = new ChangeWeixinTitle('foo', 'base/example/favicon.ico');
  });

  it('should not change document.title', () => {
    expect(document.title).to.equal('foo');
    changeWeixinTitle.changeTitle();
    expect(document.title).to.equal('foo');
  });

  it('should change document.title', () => {
    expect(document.title).to.equal('foo');
    changeWeixinTitle.changeTitle('bar');
    expect(document.title).to.equal('bar');
  });
});

describe('ChangeWeixinTitle for iOS Weixin', () => {
  let changeWeixinTitle;

  beforeEach(() => {
    if (navigator.__defineGetter__) { // eslint-disable-line no-restricted-properties, no-underscore-dangle, max-len
      navigator.__defineGetter__('userAgent', () => WEIXIN_USER_AGENT); // eslint-disable-line no-restricted-properties, no-underscore-dangle, max-len
    } else if (Object.defineProperty) {
      Object.defineProperty(navigator, 'userAgent', {
        get: () => WEIXIN_USER_AGENT,
      });
    }

    changeWeixinTitle = new ChangeWeixinTitle('foo', 'base/example/favicon.ico');
  });

  it('should userAgent match', () => {
    expect(window.navigator.userAgent).to.equal(WEIXIN_USER_AGENT);
  });

  it('should change document.title', () => {
    expect(document.title).to.equal('foo');
    changeWeixinTitle.changeTitle('bar');
    expect(document.title).to.equal('bar');
  });

  it('should have no iframes', (done) => {
    setTimeout(() => {
      if (!document.getElementsByTagName('iframe').length) {
        done();
      }
    }, 1000);
  });
});
