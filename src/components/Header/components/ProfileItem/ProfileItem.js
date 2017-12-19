import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import userPic from '../../../../assets/images/flip.jpg';
import caretIcon from '../../../../assets/images/caret.svg';

import styles from './profileItem.scss';

class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userName: 'User Name'
    };
  }

  // toggleDropDown = () => {
  //   this.setState({isOpen: !this.state.isOpen});
  // };

  handleOffClick = () => {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOffClickChecker, false);
    } else {
      document.removeEventListener('click', this.handleOffClickChecker, false);
    }
    this.setState({isOpen: !this.state.isOpen});
  };

  handleOffClickChecker(e) {
    // console.log(this);
    // console.log(this.node);
    // console.log(e);
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleOffClick();
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div
        className={isOpen ? styles.containerHover : styles.container}
        onClick={this.handleOffClick}
        ref={(node) => {
          this.node = node;
        }}
      >
        <img className={styles.userPic} src={userPic} />
        <img
          style={{transform: `rotate(${isOpen ? '180deg' : '0deg'})`}}
          src={caretIcon}
        />
        <div
          style={{display: this.state.isOpen ? 'flex' : 'none'}}
          className={styles.dropDown}
        >
          <span className={styles.userName}>{this.state.userName}</span>
          <Link className={styles.dropDownItem} to={''}>My Profile</Link>
          <Link className={styles.dropDownItem} to={''}>Resolved Tasks</Link>
          <Link className={styles.logout} to={''}>LOGOUT</Link>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
