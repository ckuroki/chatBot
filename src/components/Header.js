import React from 'react';
import robot from '../icons/robotIcon.svg';

/*
Header: Simple heading/navigation bar stateless component
*/

const Header = (props) => {
    return (
      <header className="tc pv3 pv4-ns mb3 bg-white black bb">
        <h1 className="f5 f4-ns fw6 gray"><img alt="Robot Icon" src={robot}/> ChatBot</h1>
        <h2 className="f6 mid-gray fw2 tracked">Send your Message !</h2>
        {props.currentUser?(<h3 className="f6 mid-gray fw2 tracked">Connected as : {props.currentUser}</h3>):(<div/>)}
        {props.haveLogout?(<div className="fr f6 mid-gray fw2 tracked grow mb3 pointer" onClick={()=>{props.actions.userLogout();}}>Logout</div>):(<div/>)}
      </header>
    );
}

export default Header;


