import React from 'react'
import { Button, TextButton } from './styled'
import Icon from 'react-native-vector-icons/Ionicons'

type ButtonGreenProps = {
  text?: string;
  onPress: () => void;
}

export function ButtonGreen({ text, onPress }: ButtonGreenProps) {
  return (
    <Button onPress={onPress}>
      <Icon name="add-outline" size={24} color='#FFF' />
      {text ? (
        <TextButton>{text}</TextButton>
      ) : (
        <TextButton>Adicionar novo item</TextButton>
      )}
    </Button>
  )
}