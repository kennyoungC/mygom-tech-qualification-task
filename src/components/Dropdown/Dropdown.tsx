/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import { arrowDown, arrowUp } from "../icons/icons"

import "../styles/Dropdown.css"

const dropdownItems = [
  "Lorem ipsum dolor.",
  "ipsum dolor sit.",
  " dolor sit amet.",
  " testing amit entice.",
]
const Dropdown = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  const toggleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu)

  const selectHandler = (listItem: string) => {
    if (selectedItem.includes(listItem)) {
      setSelectedItem(selectedItem.filter((item) => item !== listItem))
    } else {
      setSelectedItem([...selectedItem, listItem])
    }
  }

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdownMenu}>
        <span>Dropdown</span>
        <span>{showDropdownMenu ? arrowUp() : arrowDown()}</span>
      </button>
      {showDropdownMenu && (
        <ul className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <li
              className={selectedItem.includes(item) ? "selected" : ""}
              key={index}
              onClick={() => selectHandler(item)}
            >
              <a href="#">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
