import React, { useState } from 'react';
import { useFormContext } from '../../contexts/FormContext.js';
import './Form.css';

export default function Form({ title, tools, arrowRight, arrowDown, formName }) {
  const { openForm, setOpenFormAndCloseOthers } = useFormContext();

  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
    setOpenFormAndCloseOthers(formName);
  };

  return (
    <div className={`form ${formName === openForm ? 'active' : ''}`}>
      <h2 className={`form__title ${showList ? 'active' : ''}`}>{title}</h2>
      <button
        className={`form__button ${showList ? 'visible' : ''}`}
        onClick={toggleList}
      >
        <img
          src={showList ? arrowDown : arrowRight}
          alt="Arrow"
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

// import React, { useState } from 'react';
// import './Form.css';

// export default function Form({ title, tools, arrowRight, arrowDown }) {

//   const [showList, setShowList] = useState(false);

//   const toggleList = () => {
//     setShowList(!showList);
//   };

//   return (
//     <div className="form">
//       <h2 className={`form__title ${showList ? 'active' : ''}`}>{title}</h2>
//       <button
//         className={`form__button ${showList ? 'visible' : ''}`}
//         onClick={toggleList}
//       >
//         <img
//           src={showList ? arrowDown : arrowRight}
//           alt="Arrow"
//         />
//       </button>
//       <div className={`form__list ${showList ? 'visible' : ''}`}>
//         {tools.map((tool, index) => (
//           <p className="form__tool" key={index}>
//             {tool}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

