import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((cData) => {
        return (
          <div className="card" key={cData.key}>
            <div className="card__percentage">{cData.count}</div>
            <div className="card__detail">
              <div className="card__title">{cData.title}</div>
              <div className="card__count">Total : {cData.total}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
