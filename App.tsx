import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , useColorScheme} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Contest from './Pages/Contest/Contest';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Pages/Details/Details';
import Login from './Pages/Login/Login';
import SignUP from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Games/Walkathon/index';
import * as NavigationBar from "expo-navigation-bar";

export default function App() {

  const Stack = createNativeStackNavigator();

  

  const isDark = useColorScheme() === "dark";
  
  NavigationBar.setBackgroundColorAsync((isDark)?"black":"white")

  return (
    <SafeAreaView style={styles.container}>
      
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown : false}}>
              {/* <Stack.Screen name='SignUp' component={SignUP}/> */}
              {/* <Stack.Screen name='Login' component={Login}/> */}
              
              {/* <Stack.Screen name='Contest' component={Contest}/> */}
              {/* <Stack.Screen name='Details' component={Details}/> */}
              {/* <Stack.Screen name='Profile' component={Profile}/> */}
              <Stack.Screen name="Walkathon" component={Home}/>
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={(isDark)?'black' : "white"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
