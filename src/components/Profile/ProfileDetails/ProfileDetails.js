import React, {Component} from 'react';
import style from './style.scss';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
              Your details
          </dt>
        </dl>
      </div>
    );
  }
}
