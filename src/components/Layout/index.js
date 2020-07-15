import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "../layout.css"

const Layout = ({ children, isHome }) => {
  return (
    <main>
      <Navbar siteTitle="Melty's Ice Cream" isHome={isHome} />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
