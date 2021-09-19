import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useShopList } from '../context/ShopListContext'
import { ButtonGreen } from '../components/Buttom'
import { CardItem } from '../components/CardItem'
import { RootStackParamList } from '../routes'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

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
  const { shopList } = useShopList()

  function handleToCreateItem() {
    navigation.navigate('Created')
  }

  function handleEditItem(id: string) {
    navigation.navigate('Edit', { id })
  }

  function formatNumber() {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const totalShop = shopList?.reduce((acc, item) => {
    return acc + item.total
  }, 0)

  const formatShopList = useMemo(() => {
    if (shopList) {
      return shopList.map(item => ({
        id: item.id,
        name: item.name,
        qnt: item.qnt,
        valueQnt: item.valueQnt,
        total: item.total,
        valueFormat: formatNumber().format(item.valueQnt)
      }))
    }
  }, [shopList])

  return (
    <>
      <Container>
        <Title>Compra mês</Title>
        <SubTitle>Agosto 2021</SubTitle>

        <ContainerSummary>
          <TitleSummary>Valor da compra:</TitleSummary>
          <SubTitle>{formatNumber().format(totalShop)}</SubTitle>
        </ContainerSummary>

        <ContainerList>
          {formatShopList?.map((item, index) => {
            return (
              <CardItem
                key={item.id}
                name={item.name}
                qnt={item.qnt}
                valueQnt={item.valueFormat}
                id={item.id}
                handleEditItem={() => handleEditItem(item.id)}
              />
            )
          })}
        </ContainerList>
      </Container>
      <ContainerButtonAdd>
        <ButtonGreen onPress={() => handleToCreateItem()} />
      </ContainerButtonAdd>
    </>
  )
}