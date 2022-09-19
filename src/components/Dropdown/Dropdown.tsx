/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import { arrowDown, arrowUp, checked } from "../icons/icons"

import "../styles/Dropdown.css"
import { IDropdownProps } from "../types"

const dropdownItems = [
  { brand: "German Cars", car: ["audi", "bmw", "mercedes"] },
  { brand: "Swedish Cars", car: ["tesla", "honda", "toyota"] },
  { brand: "Polish Cars", car: ["corrola", "golf", "porche"] },
]
const Dropdown = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IDropdownProps[]>([])

  const toggleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu)

  const selectHandler = (carName: string, brand: string) => {
    const brandObject = selectedItem.find((item) => item.brand === brand)

    const carIndex = selectedItem.findIndex((car) => car.brand === brand)
    if (brandObject) {
      if (brandObject.car.includes(carName)) {
        const newCar = {
          ...brandObject,
          car: brandObject.car.filter((car) => car !== carName),
        }
        selectedItem[carIndex] = newCar
        setSelectedItem([...selectedItem])
      } else {
        const newCar = { ...brandObject, car: [...brandObject.car, carName] }
        selectedItem[carIndex] = newCar

        setSelectedItem([...selectedItem])
      }
    } else {
      setSelectedItem([...selectedItem, { brand, car: [carName] }])
      console.log("this happened in first case")
    }
  }

  return (
    <div className="dropdown-container">
      <button type="button" onClick={toggleDropdownMenu}>
        <span>Dropdown</span>
        <span>{showDropdownMenu ? arrowUp() : arrowDown()}</span>
      </button>
      {showDropdownMenu && (
        <ul className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="brand-name">
                {item.brand}
              </a>
              <ul>
                {item.car.map((car, index) => (
                  <li
                    onClick={() => selectHandler(car, item.brand)}
                    key={index}
                  >
                    <span>{car}</span>
                    <span>
                      {" "}
                      {selectedItem.find(
                        (stateItem) =>
                          stateItem.brand === item.brand &&
                          stateItem.car.includes(car)
                      )
                        ? checked()
                        : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
