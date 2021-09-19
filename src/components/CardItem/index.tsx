import React, { useRef } from 'react'
import { Animated, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useShopList } from '../../context/ShopListContext';
import { ContainerCard, ContainerDescription, TextGray, TitleItem } from './style'

interface CardItemProps {
  id: string;
  name: string;
  qnt: number;
  valueQnt: string;
  handleEditItem: () => void;
}

export function CardItem({ name, qnt, valueQnt, id , handleEditItem}: CardItemProps) {
  const itemRef = useRef(null)

  const { removeShopItem } = useShopList()

  const renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation,
    onPress: () => void,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      itemRef.current.close()
    };

    const handleOnPress = () => {
      onPress()
      pressHandler()
    }

    return (
      <Animated.View style={{
        flex: 1,
        backgroundColor: color,
        transform: [{ translateX: trans }],
        height: 70,
        borderRadius: 10,
        marginLeft: 6,
      }}
      >
        <RectButton
          onPress={handleOnPress}
          style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text  style={{
            color: '#FFF',
            fontFamily: 'Poppins_700Bold',
          }}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    _dragAnimatedValue: Animated.AnimatedInterpolation
  ) => (
    <View
      style={{
        width: 192,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {renderRightAction('Remover', '#EC4631', 192, progress, () => removeShopItem(id))}
      {renderRightAction('Editar', '#ffab00', 128, progress, () => handleEditItem())}
    </View>
  );
  return (
    <Swipeable
      ref={itemRef}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      renderRightActions={renderRightActions}
    >
      <ContainerCard>
        <TitleItem>{name}</TitleItem>
        <ContainerDescription>
          <TextGray>Unid: {qnt}</TextGray>
          <TextGray>{valueQnt}/ unid</TextGray>
        </ContainerDescription>
      </ContainerCard>
    </Swipeable>
  )
}