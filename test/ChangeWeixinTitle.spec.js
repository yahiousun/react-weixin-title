import { expect } from 'chai';

import ChangeWeixinTitle from '../src/ChangeWeixinTitle';

const WEIXIN_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/0.10.102800 MicroMessenger/6.3.9 Language/zh_CN webview/0';

describe('ChangeWeixinTitle', () => {
  let _changeWeixinTitle;

  beforeEach(() => {
    _changeWeixinTitle = new ChangeWeixinTitle('foo', 'base/example/favicon.ico');
  });

  it('should change document.title', () => {
    expect(document.title).to.equal('foo');
  });

  it('should not update document.title', () => {
    expect(document.title).to.equal('foo');
    _changeWeixinTitle.changeTitle();
    expect(document.title).to.equal('foo');
  });

  it('should update document.title', () => {
    expect(document.title).to.equal('foo');
    _changeWeixinTitle.changeTitle('bar');
    expect(document.title).to.equal('bar');
  });

});

describe('ChangeWeixinTitle for iOS Weixin', () => {
  let _changeWeixinTitle;

  beforeEach(() => {
    if (navigator.__defineGetter__) {
      navigator.__defineGetter__('userAgent', function () { 
        return WEIXIN_USER_AGENT; 
      });
    } else if (Object.defineProperty) { 
      Object.defineProperty(navigator, 'userAgent', { 
        get: function () { 
          return WEIXIN_USER_AGENT;
        }
      });
    }
    _changeWeixinTitle = new ChangeWeixinTitle('foo', 'base/example/favicon.ico');
  });

  it('should userAgent match', () => {
    expect(window.navigator.userAgent).to.equal(WEIXIN_USER_AGENT);
  });

  it('should change document.title', () => {
    expect(document.title).to.equal('foo');
  });

  it('should update document.title', () => {
    expect(document.title).to.equal('foo');
    _changeWeixinTitle.changeTitle('bar');
    expect(document.title).to.equal('bar');
  });

  it('should have no iframes', (done) => {

    let iframes = document.getElementsByTagName('iframe').length;

    setTimeout(function() {
      if (document.getElementsByTagName('iframe').length) {
        done(true)
      }
      else {
        done();
      }
    }, 1000)

  });

});