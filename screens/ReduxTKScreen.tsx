import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

export const ReduxTKScreen = () => {
  useEffect(() => {
    console.log('mounted ReduxTK')
    return () => {
      console.log('un-mounted ReduxTK')
    }
  }, [])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit</Text>
    </View>
  )
}

