import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Auth from '../components/Auth';
import ChatRoom from '../components/ChatRoom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as chatActions from '../actions';

/*
  Main page 
*/

class MainPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {messages,actions,currentUser}= this.props;

  return (
      <Auth currentUser={currentUser}>
        <Header currentUser={currentUser} actions={actions} haveLogout={true} />
          <ChatRoom messages={messages} actions={actions} currentUser={currentUser}/>
        <Footer/>
      </Auth>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}
function  mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  };
}

const mainpage = connect( mapStateToProps, mapDispatchToProps)(MainPage);
export default withRouter(mainpage);
