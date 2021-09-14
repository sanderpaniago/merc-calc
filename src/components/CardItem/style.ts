import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const ContainerCard = styled(View)`
  width: 100%;
  height: 72px;

  background: #212325;
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 24px;
`

export const TitleItem = styled(Text)`
  font-family: 'Poppins_500Medium';
  font-size: 14px;
  color: #fff;
`

export const TextGray = styled.Text`
  color: #555C6A;
  font-size: 12px;
  font-family: 'Poppins_400Regular';
  margin-right: 10px;
`
export const ContainerDescription = styled(View)`
  flex-direction: row;
`