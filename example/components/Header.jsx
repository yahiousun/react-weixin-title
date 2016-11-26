import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="container-fluid header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/getting-started" className="nav-item" activeClassName="active">Getting Started</Link>
            <a href="https://github.com/yahiousun/react-weixin-title" className="nav-item">Docs</a>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;