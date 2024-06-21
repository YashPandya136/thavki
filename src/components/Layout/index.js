import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import '../../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="w-full h-full bg-neutral">
      <Header />
      {children}
      <Footer />
    </div>
  )
}