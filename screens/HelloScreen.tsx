import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useEffect, VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { RootStackParamList } from '../types/types'
import {Button} from 'react-native-elements'

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>
export const HelloScreen:VFC<Props> = ({navigation}) => {
  useEffect(() => {
    console.log('mounted Hello')
    return () => {
      console.log('un-mounted Hello')
    }
  }, [])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
      <View style={tw('my-3')}>
        <Button title="Go to ReduxTK" onPress={()=>navigation.navigate("ReduxTK")} />
      </View>
    </View>
  )
}
