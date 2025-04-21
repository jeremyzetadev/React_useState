import React from 'react'
import { useState } from 'react'

const Content2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Sugar",
    },
    {
      id: 2,
      checked: false,
      item: "Milk",
    },
    {
      id: 3,
      checked: true,
      item: "Coffee",
    },
  ]);

  
  const handleCheck = (id) => {
    const listItems = items.map((item)=>(item.id===id ? {...item, checked: !item.checked} : item));
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item)=>(item.id!=id))
    setItems(listItems);
  }
  

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)}/>
            <label>{item.item}</label>
            <button type="Delete" onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>   
    </main>
  )

}

export default Content2
