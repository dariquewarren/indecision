import React from 'react';



const Action = (props) => (
  <div>
    <button 
    className="big-button"
    onClick={props.handlePick} disabled={!props.hasOptions}>
      what should i don?
    </button>
  </div>
);
  export default Action