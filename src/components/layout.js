import React from "react"

import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar siteTitle="Melty's Ice Cream" />
      {children}
    </main>
  )
}

export default Layout
