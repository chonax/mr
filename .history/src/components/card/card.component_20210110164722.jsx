import React from 'react';

export const Card = (props) => (
  <div>
    <h1 key={props.monster.id}> {props.monster.name} </h1>
  </div>
)