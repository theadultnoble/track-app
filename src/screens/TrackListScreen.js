import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
      title='Track Detail'
      onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  )
}

export default TrackListScreen;

const styles = StyleSheet.create({});