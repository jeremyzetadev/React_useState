import React from 'react'

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
      <form onSubmit={(e)=>e.preventDefault()}>
        <label for="">Add colorName</label>
        <input
            autoFocus
            required
            placeholder = 'Add color name'
            value = {colorValue}
            onClick = {(e)=>{
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
      </form>
  )
}

export default Input
