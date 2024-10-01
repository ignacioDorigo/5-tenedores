import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import { screen } from '../../utils'
import { useNavigation } from '@react-navigation/native'

export function RestaurantsScreen() {

  const navigation = useNavigation();

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurants.addRestaurant);
  }

  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button title='Crear Restaurante' onPress={goToAddRestaurant} />
    </View>
  )
}