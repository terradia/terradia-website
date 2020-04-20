import { Link } from "gatsby"
import React from "react"
import HeaderStyle from "./styles/header.module.scss"
import Logo from "../../assets/logo-green-terradia.svg"

const Header = () => (
  <div className={HeaderStyle.header}>
      <Link to={"/"}>
          <Logo/>
      </Link>
      <button className={HeaderStyle.btn}>Viens faire un tour sur notre blog</button>
  </div>
)

export default Header
