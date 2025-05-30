import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Footer from './components/footer';
import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductsDetails';
import { CartIcon ,CartProvider , Cart } from './screens/Cart';
//import { CartIcon } from './components/CartIcon';
//import { CartProvider } from './components/CartContext';
import Login from './screens/InicioSesion';
import { AuthProvider, AuthContext } from './context/AuthContext'; // Importa AuthProvider y AuthContext
import {CodigoQR} from './components/CodigoQR';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Products' component={ProductsList} 
              options={({ navigation }) => ({
                title: 'Products',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>
              })}
            />
            <Stack.Screen name='ProductDetails' component={ProductDetails} 
              options={({ navigation }) => ({
                title: 'Product details',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>,
              })}
            />
            <Stack.Screen name='Cart' component={Cart} 
              options={({ navigation }) => ({
                title: 'My cart',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>,
              })}
            />
            <Stack.Screen name='CodigoQR' component={CodigoQR} options={({ navigation }) => ({
                title: 'Products',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;