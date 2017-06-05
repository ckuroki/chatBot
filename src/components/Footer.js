import React from 'react';
import jovioLogo from '../icons/jovioLogo.png';

/*
 Simple footer stateless component
*/

const Footer = () => {
	return (
  <footer className="mt6-ns mt3 pv4 ph3 ph5-m ph6-l mid-gray bg-white bt">
    <div className="tc">
      <a href="https://jovio.com" className="f6 dib ph2 link mid-gray dim">
        <img alt="Jovio Logo" src={jovioLogo}/>
      </a>
      <small className="f6 db tc">© 2017 </small>
    </div>
  </footer>
  );
}

export default Footer;

