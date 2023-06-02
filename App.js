import { StyleSheet, View } from 'react-native';
import KeyContainer from './components/KeyContainer';

export default function App() {
  return (
    <View style={styles.app}>
      <KeyContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
    backgroundColor: '#150e45',
    flex: 1,
    justifyContent: 'center',
  },
});
