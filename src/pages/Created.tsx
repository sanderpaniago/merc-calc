import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonGreen } from "../components/Buttom";
import { useShopList } from "../context/ShopListContext";
import { RootStackParamList } from "../routes";
import { Input } from "../style/create";
import { Container } from "../style/main";

type createdScreenProp = StackNavigationProp<RootStackParamList, 'Created'>

export default function Created() {

  const navigation = useNavigation<createdScreenProp>()

  const {newShopItem} = useShopList()

  const [name, setName] = useState('')
  const [qnt, setQnt] = useState('')
  const [valueQnt, setValueQnt] = useState('')

  function handleCreatedNewItem() {
    const newItem = {
      name,
      qnt: Number(qnt),
      valueQnt: Number(valueQnt),
      total: Number(qnt) * Number(valueQnt),
    }
    newShopItem(newItem)

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

        <ButtonGreen onPress={()=> handleCreatedNewItem()}/>
      </SafeAreaView>
    </Container>
  )
}