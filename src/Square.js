import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
      <section
        className = "square"
        style = {{background: colorValue, color:isDarkText ? "#000" : "#FFF"}}
      >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </section>
  )
}

export  default Square
