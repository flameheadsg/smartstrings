import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import StyledText from './StyledText';
import data from '../majorMinorKeys.json';

export default function KeyContainer() {
  const [selectedKey, setSelectedKey] = useState('');

  return (
    <View style={styles.container}>
      <StyledText size={20}>Welcome to SmartStrings</StyledText>
      <StyledText marginBottom={'10%'} size={16}>View the harmonized chords for any key!</StyledText>
      <SelectDropdown
        buttonStyle={{borderRadius: 12}}
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
    marginTop: '30%',
  },
});
