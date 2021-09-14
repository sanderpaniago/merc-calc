import React from 'react'
import { ContainerCard, ContainerDescription, TextGray, TitleItem } from './style'

interface CardItemProps {
  name: string;
  qnt: number;
  valueQnt: string;
}

export function CardItem({name, qnt, valueQnt}: CardItemProps) {
  return (
    <ContainerCard>
      <TitleItem>{name}</TitleItem>

      <ContainerDescription>
        <TextGray>Unid: {qnt}</TextGray>
        <TextGray>{valueQnt}/ unid</TextGray>
      </ContainerDescription>
      
    </ContainerCard>
  )
}