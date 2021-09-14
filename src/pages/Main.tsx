import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { ButtonGreen } from '../components/Buttom'
import { CardItem } from '../components/CardItem'
import { RootStackParamList } from '../routes'
import {
  Container,
  Title,
  SubTitle,
  ContainerSummary,
  TitleSummary,
  ContainerList,
  ContainerButtonAdd
} from '../style/main'

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>

export default function Main() {
  const navigation = useNavigation<mainScreenProp>()

  function handleToCreateItem() {
    console.log('ola')
    navigation.navigate('Created')
  }

  return (
    <Container>
      <Title>Compra mês</Title>
      <SubTitle>Agosto 2021</SubTitle>

      <ContainerSummary>
        <TitleSummary>Valor da compra:</TitleSummary>
        <SubTitle>R$ 56,04</SubTitle>
      </ContainerSummary>

      <ContainerList>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ContainerList>

      <ContainerButtonAdd>
        <ButtonGreen onPress={() => handleToCreateItem()} />
      </ContainerButtonAdd>
    </Container>
  )
}