import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoTerradia from '../../../assets/logo-green-terradia.svg'

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Ressources</span>
        <ul>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Entreprise</span>
        <ul>
          <li>À Propos</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <a href="https://instagram.com/terradiaapp" target="_blank"><li>Instagram</li></a>
          <a href="https://facebook.com/terradiaapp"><li>Facebook</li></a>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Informations</span>
        <ul>
            <Link to="/mentions-legales">
                <li>Mentions légales</li>
            </Link>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  display: flex;
  align-items: center;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
      color: #8FDD3D;
    }
    a {
      text-decoration: none;
    }
  }
`

export default Footer
