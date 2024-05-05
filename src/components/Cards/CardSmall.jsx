import React from 'react';

//TODO - State 수정 해야함 그냥 복붙 상태임2
const CardSmall = ({ thumbnail, title, description }) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} className="card-thumbnail" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardSmall;