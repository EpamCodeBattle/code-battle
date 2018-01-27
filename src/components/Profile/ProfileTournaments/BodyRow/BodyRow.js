import React from 'react';
import {Link} from 'react-router-dom';

import style from './style.scss';

const renderTags = (tags) => {
  return tags.map((tag, title) => (
    <span className={style.tag}
      key={tag + title}>{tag}
    </span>
  ));
};

const BattleBodyRow = (props) => {
  const {
    id,
    name,
    tags,
    taskIds
  } = props.tournament;
  return (
    <div className={style.row}>
      <div className={style.tournamentInfo}>
        <Link className={style.tournamentName}
          to={{pathname: `/${id}`}}>{name}
        </Link>
        {renderTags(tags, name)}
      </div>
      <div>{taskIds.length}</div>
    </div>
  );
};

export default BattleBodyRow;
