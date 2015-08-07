import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {
          mapValues(this.props.friends, (friend) => {
            return (<FriendListItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              starred={friend.starred}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}
