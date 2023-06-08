import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StyledText(props) {
  return (
    <View>
      <Text style={[styles.text, {
        fontSize: props.size || 16,
        marginTop: props.marginTop || '4%',
        marginBottom: props.marginBottom || '4%',
      }]}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});