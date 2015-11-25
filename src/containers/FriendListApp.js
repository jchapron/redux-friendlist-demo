import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  static propTypes = {
    // friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { friendlist: { friendsById }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}


// Babel 6.x doesn't seem to support decorators yet
function select(state) {
  return {
    friendlist: state.friendlist
  }
}

export default connect(select)(FriendListApp)
