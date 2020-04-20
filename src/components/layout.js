/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import LayoutStyles from './styles/layout.module.scss'

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <Header/>
            <div className={LayoutStyles.content}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};

export default Layout
