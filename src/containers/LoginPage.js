import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as chatActions from '../actions';
import * as stringUtils from '../utils/string.js';

/*
Initial login page : only allow to connect with valid email
*/

class LoginPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      emailError: false,
      connectOk: false
    };
  }

  changeEmail(ev) {
    this.setState({
      email: ev.target.value,
      emailError: false
    });
  }

  doConnection() {
    const {actions} = this.props;
    const {email} = this.state;

    if (stringUtils.validateEmail(email)) {
      actions.userLogin(email);
      this.setState({
        connectOk: true
      });
    } else {
      this.setState({
        emailError: true
      });
    }
  }

  render() {
    const {connectOk,emailError,email}= this.state;

  if (connectOk) {
    return(<Redirect to="/"/>);
  } else {
    return (
    <div>
    <Header/>
    <main className="pa4 black-80 mt5-ns mt4">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Login</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input className={"pa2 ba bg-transparent hover-bg-silver hover-black w-100 franklin "+(emailError?"b--red":"")} onChange={(ev)=>{this.changeEmail(ev);} }  value={email} />
              {emailError?<small className="f6 red db mb2">Invalid email format !!.</small>:<span/>}
            </div>
          </fieldset>
          <div className="mt3">
            <a className="f6 link ph3 pv2 mb2 dib black grow bg-silver pointer" onClick={()=>{this.doConnection();} }> Connect ! </a>
          </div>
        </form>
      </main>
      <Footer/>
      </div>
    );
  }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

const page = connect( null, mapDispatchToProps)(LoginPage);
export default withRouter(page);
