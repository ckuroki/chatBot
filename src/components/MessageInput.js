import React,{Component} from 'react';
import PropTypes from 'prop-types';
import * as stringUtils from '../utils/string.js';
import moment from 'moment';

/*
Text input component for message input
*/

export default class MessageInput extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  changeMessage(ev) {
    this.setState({
      message: ev.target.value
    });
  }

  sendMessage() {
    const {actions,currentUser} = this.props;
    const {message} = this.state;
    actions.postMessageSuccess({user: currentUser,
                                content: message,
                                created_at: moment().toISOString()});

    actions.postMessageSuccess({user: 'chatBot',
                                content: stringUtils.reverse(message),
                                created_at: moment().toISOString()});
  }

  render() {
  const {message} = this.state;
    return (
    <form className="pa4 black-80 tc">
      <div className="tc">
        <label className="f6 b db mb2">New message: </label>
        <textarea className="w-40-ns w-75 h3" onChange={(ev)=>{this.changeMessage(ev);}} value={message}/>
        <div>
          <a className="f6 link ph3 pv2 mb2 dib black grow bg-silver pointer" onClick={()=>{this.sendMessage();} }> Send ! </a>
        </div>
      </div>
  </form>
    );
  }
}


