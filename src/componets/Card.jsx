import React from 'react';

function Card() {
  return (
    <div className="card-container h-48 w-36 shadow-lg m-2">
      <div className="top-container h-1/2 bg-orange-300"></div>
      <div className="bottom-container">
        <div className="bottom-top-container flex justify-between">
          <div className="text">data mining</div>
          <div className="download">🔽</div>
        </div>
        <div className="bottom-middle-container flex justify-start gap-1">
          <div className="tags bg-red-200 "> sem 6</div>
          <div className="tags bg-red-200 "> Eng</div>
        </div>
        <div className="bottom-last-container">
          <div className="name">Jon Camerom</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
