import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Dropdown from "../components/Dropdown/Dropdown"

describe("Dropdown Component", () => {
  it("render dropdown menu if button was clicked", () => {
    render(<Dropdown />)
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)

    const dropdownMenu = screen.getByRole("list")
    expect(dropdownMenu).toBeInTheDocument()
  })
  it("does render dropdown menu if button was clicked", () => {
    render(<Dropdown />)
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)
    userEvent.click(buttonElement)

    const dropdownMenu = screen.queryByRole("list")
    expect(dropdownMenu).toBeNull()
  })
})
