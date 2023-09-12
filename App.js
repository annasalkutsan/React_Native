import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: '#e9c195' }}>Text №1</Text>
      <StatusBar style="auto" />
      
        <Text style={{backgroundColor: '#7f3131'}}>Image</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/3a/fb/d3/3afbd3a377704c9d6a4e1e5842d7327d.jpg',
          }}
          style={{width: 300, height: 300}}
        />
      
      <Text style={{backgroundColor: '#625b85'}}>Text №2</Text>
      <TextInput
        style={{
          height: 30,
          borderWidth: 1,
          margin: 10,
          padding: 10,
        }}
        defaultValue="You can type"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
