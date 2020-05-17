import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Envie de consommer local?</Subtitle>
      <SectionTitle>Découvre de nouveaux producteurs!</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Découvre</FeatureTitle>
          <FeatureText>
            Terradia te permet de découvrir les producteurs locaux qui se trouvent juste à côté de chez toi !
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Commande</FeatureTitle>
          <FeatureText>
            Sur Terradia, tu commandes les produits locaux de ton choix en quelques clics!
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Consomme</FeatureTitle>
          <FeatureText>
            Avec la livraison Terradia dans les heures qui suivent ta commande, tu consommes des produits ultra frais!          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Parles-en</FeatureTitle>
          <FeatureText>
            Parce que notre objectif est de faire redécouvrir le terroire, parles de tes producteurs préférés autour de toi!          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
