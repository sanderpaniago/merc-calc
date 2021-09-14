import React from 'react'
import { Button, TextButton } from './styled'
import Icon from 'react-native-vector-icons/Ionicons'

type ButtonGreenProps = {
  onPress: () => void;
}

export function ButtonGreen({ onPress }: ButtonGreenProps) {
  return (
    <Button onPress={onPress}>
      <Icon name="add-outline" size={24} color='#FFF' />
      <TextButton>Adicionar novo item</TextButton>
    </Button>
  )
}