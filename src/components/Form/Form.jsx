import React, { useState } from 'react';
import './Form.css';

export default function Form({ title, tools, arrowRight }) {

  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="form">
      <h2 className={`form__title ${showList ? 'active' : ''}`}>{title}</h2>
      <button
        className={`form__button ${showList ? 'visible' : ''}`}
        onClick={toggleList}
      >
<img
          src={arrowRight}
          alt="Arrow"
          style={{ transform: showList ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div className={`form__list ${showList ? 'visible' : ''}`}>
        {tools.map((tool, index) => (
          <p className="form__tool" key={index}>
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}

