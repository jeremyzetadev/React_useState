import React from 'react'
import {useState} from 'react';

const Content = () => {

  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Alice','Bob','Dave'];
    const idx = Math.floor(Math.random()*3);
    setName(names[idx]);
  }

  const handleClick = () => {
    setCount(count+1);
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button type="button" onClick={handleNameChange}>Change Name</button>
      <button type="button" onClick={()=>{handleClick()}}>Click it</button>
      <button type="button" onClick={(e)=>{handleClick3(e)}}>Click it</button>
    </main>
  )
}

export default Content
