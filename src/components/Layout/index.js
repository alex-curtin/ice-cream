import React from "react"

import Navbar from "./Navbar"
import "../layout.css"

const Layout = ({ children }) => {
  const isHome = children.props.className.startsWith("home")
  console.log(children)
  return (
    <main>
      <Navbar siteTitle="Melty's Ice Cream" isHome={isHome} />
      {children}
    </main>
  )
}

export default Layout
