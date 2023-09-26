import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Contest from './Pages/Contest/Contest';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Pages/Details/Details';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Screen name='Contest' component={Contest}/>
      </NavigationContainer> */}
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown : false}}>
              <Stack.Screen name='Contest' component={Contest}/>
              <Stack.Screen name='Details' component={Details}/>
          </Stack.Navigator>
      </NavigationContainer>
      {/* <Contest/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
