import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {VFC , useEffect} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { RootStackParamList } from '../types/types'
import {Button} from 'react-native-elements'

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>

export const ReduxTKScreen:VFC<Props> = ({navigation}) => {
  useEffect(() => {
    console.log('mounted ReduxTK')
    return () => {
      console.log('un-mounted ReduxTK')
    }
  }, [])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit</Text>
      <View style={tw('my-3')}>
      <Button onPress={()=>navigation.navigate('FlexBox')} title="Go to FlexBox"/>
      </View>
    </View>
  )
}

