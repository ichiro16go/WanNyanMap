import { StatusBar } from 'expo-status-bar';
//components系
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
//page
import BookMarkPage from './app/view/pages/bookMarkPage';
import MapPage from './app/view/pages/mapPage';
import WalkCoursePage from './app/view/pages/walkCoursePage';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Walk" 
          component={WalkCoursePage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="walk" size={size} color={color} /> 
            ),
            headerShown: false
          }} 
          
        />
        <Tab.Screen 
          name="Map" 
          component={MapPage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} /> 
            ),
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Book" 
          component={BookMarkPage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark" size={size} color={color} /> // アイコンを設定
            ),
            headerShown: false
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
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
