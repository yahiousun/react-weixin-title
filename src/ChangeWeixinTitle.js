class ChangeWeixinTitle {
  constructor(title, src) {
    this.title = title;
    this.src = src;
    this.removeIframe = this.removeIframe.bind(this);
    this.changeTitle(this.title, this.src);
  }
  removeIframe() {
    if (this.iframe) {
      this.iframe.removeEventListener('load', this.removeIframe);
      setTimeout(() => {
        this.iframe.parentNode.removeChild(this.iframe);
        this.iframe = null;
      }, 0);
    }
  }
  changeTitle(title, src) {
    const data = {
      title: title || this.title,
      src: src || this.src,
    };

    if (typeof data.title === 'string' && data.title !== document.title) {
      document.title = data.title;
      if (/^(?=.*\b(iPhone|iPad|iPod)\b)(?=.*\bMicroMessenger\b).*$/.test(window.navigator.userAgent)) {
        this.removeIframe();
        this.iframe = document.createElement('iframe');
        this.iframe.style.display = 'none';
        this.iframe.addEventListener('load', this.removeIframe);
        this.iframe.src = data.src;
        document.body.appendChild(this.iframe);
      }
    }
  }
}

export default ChangeWeixinTitle;
