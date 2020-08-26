import React, { Component } from 'react';
import Option from './Option'

const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started. Thanks!</p>}
        {props.options.map((element) => (
          <Option
            key={element}
            optionText={element}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  };

  export default Options