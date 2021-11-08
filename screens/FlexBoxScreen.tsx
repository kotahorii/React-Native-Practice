import React, {VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/types'
import { Button } from 'react-native-elements'

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>

export const FlexBoxScreen:VFC<Props> = ({navigation}) => {
  useEffect(()=>{
    console.log('mounted FlexBox')
    return () => {
      console.log('un-mounted FlexBox')
    }
  },[])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>FlexBox</Text>
      <View style={tw('my-3')}>
        <Button title="Go to Hello" onPress={()=>navigation.navigate("Hello")} />
      </View>
    </View>
  )
}

