import { Text, View, Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  background: #161719;
  height: 100%;
  width: 100%;

  padding: 30px 42px;
`

export const Title = styled(Text)`
  font-family: 'Poppins_700Bold';
  font-size: 28px;
  color: #fff;

  margin-top: 30px;
`

export const SubTitle = styled(Text)`
  font-family: 'Poppins_700Bold';
  font-size: 24px;
  color: #fff;
`

export const ContainerSummary = styled(View)`
  margin-top: 30px;
`

export const TitleSummary = styled(Text)`
  font-family: 'Poppins_500Medium';
  font-size: 20px;
  color: #FFF;
`

export const ContainerList = styled(View)`
  margin-top: 30px;
`

export const ContainerButtonAdd = styled(View)`
  position: absolute;
  bottom: 30px;
  left: 0;
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  justify-content: center;
  align-items: center;
  padding: 0 42px;
`