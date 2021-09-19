import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonGreen } from "../components/Buttom";
import { useShopList } from "../context/ShopListContext";
import { RootStackParamList } from "../routes";
import { Input } from "../style/create";
import { Container } from "../style/main";

type EditScreenProp = StackNavigationProp<RootStackParamList, 'Edit'>

type ShopItemParams = {
  id: string
}

export default function Edit() {
  const navigation = useNavigation<EditScreenProp>()

  const route = useRoute()

  const { editShopItem, shopList } = useShopList()
  const { id } = route.params as ShopItemParams;
  
  const currentShopList = shopList.filter(item => item.id === id)[0]

  const [name, setName] = useState(currentShopList.name)
  const [qnt, setQnt] = useState(String(currentShopList.qnt))
  const [valueQnt, setValueQnt] = useState(String(currentShopList.valueQnt))

  function handleCreatedNewItem() {

    function formattedNumber(number: String) {
      if (number.indexOf(',') > -1) {
        const newNumber = number.split(',').join('.')
        return Number(newNumber)
      }

      return Number(number)
    }

    const newItem = {
      id: id,
      name,
      qnt: Number(qnt),
      valueQnt: formattedNumber(valueQnt),
      total: Number(qnt) * formattedNumber(valueQnt),
    }
    editShopItem(newItem)

    navigation.navigate('Main')
  }

  return (
    <Container>
      <SafeAreaView>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          placeholderTextColor="#6D6D6D"
        />
        <Input
          value={qnt}
          onChangeText={setQnt}
          placeholder="Quantidade"
          keyboardType='numeric'
          placeholderTextColor="#6D6D6D"
        />
        <Input
          value={valueQnt}
          onChangeText={setValueQnt}
          placeholder="Valor unidade"
          keyboardType='numeric'
          placeholderTextColor="#6D6D6D"
        />

        <ButtonGreen text="Atualizar Item" onPress={() => handleCreatedNewItem()} />
      </SafeAreaView>
    </Container>
  )
}