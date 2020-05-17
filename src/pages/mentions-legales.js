import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import Legals from "../components/sections/legals"


const MentionsLegales = () => (
    <Layout>
        <SEO title="Mentions Légales - Terradia"/>
        <Navigation />
        <Legals/>
        <Footer />
    </Layout>
)

export default MentionsLegales
