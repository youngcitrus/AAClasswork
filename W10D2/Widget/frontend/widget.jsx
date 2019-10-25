import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

let tabArr = [

    {title: "one", 
    content: "Illenium is for sad people :("},

    {title: "two", 
    content: "Happy people music ... doesn't exist"},

    {title: "three", 
    content: "Chris looks like a terrier woof woof 🐶"}

];

const Widget = props =>{

  return (
    <div>
      <Clock />
      <br/>
      <Tabs tabs={ tabArr }/>
    </div>
  );
};

export default Widget;