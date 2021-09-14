import React from 'react'
import { ContainerCard, ContainerDescription, TextGray, TitleItem } from './style'

export function CardItem({}) {
  return (
    <ContainerCard>
      <TitleItem>Cerveja Skol long</TitleItem>

      <ContainerDescription>
        <TextGray>Unid: 3</TextGray>
        <TextGray>R$ 4,67/ unid</TextGray>
      </ContainerDescription>
      
    </ContainerCard>
  )
}