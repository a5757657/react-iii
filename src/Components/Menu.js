import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const menuItem = ['首頁', '關於我們', '產品']
  const [activeIndex, setActiveIndex] = useState('')
  return (
    <>
      <ul>
        {menuItem.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveIndex(i)
                let num = i
                console.log(num)
              }}
            >
              <a href="#/" className={activeIndex === i ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
