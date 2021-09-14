import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Button = styled(TouchableOpacity)`
  background: #7dc579;
  border-radius: 12px;

  height: 50px;
  width: 100%;
  min-width: 276px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
`
export const TextButton = styled(Text)`
  font-family: 'Poppins_400Regular';
  font-size: 18px;
  color: #FCFCFF;
  margin-left: 16px;
`