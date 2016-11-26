import React from 'react';

import { Header, Footer } from '../Components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="container">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App;
