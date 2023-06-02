import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import data from '../majorMinorKeys.json';

export default function KeyContainer() {
  const [selectedKey, setSelectedKey] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to SmartStrings</Text>
      <Text style={styles.text}>View the harmonized chords for any key!</Text>
      <SelectDropdown
        buttonTextAfterSelection={(selectedItem, _idx) => {
          return selectedItem
        }}
        data={Object.keys(data)}
        defaultButtonText={'Select a Key'}
        onSelect={(selectedItem, _idx) => {
          setSelectedKey(selectedItem)
        }}
        rowTextForSelection={(item, _idx) => {
          return item
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '30%'
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 20
  }
});
