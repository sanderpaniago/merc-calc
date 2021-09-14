import { Text, View, Dimensions, TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
`

export const ContainerInput = styled(View)`

`

export const LabelInput = styled(Text)`
  color: #FFF;
  font-size: 16px;
`

export const Input = styled(TextInput)`
  height: 50px;
  background: #212325;
  border-radius: 8px;
  width: 100%;

  padding: 0 16px;
  margin-bottom: 24px;

  color: #FFF;
`