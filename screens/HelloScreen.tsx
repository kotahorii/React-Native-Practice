import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

export const HelloScreen = () => {
  useEffect(() => {
    console.log('mounted Hello')
    return () => {
      console.log('un-mounted Hello')
    }
  }, [])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
    </View>
  )
}
