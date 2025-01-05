import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {Icons} from '../assets';
import {Colors} from '../constants/colors.ts';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Wallet from '../screens/Wallet';
import Portfolio from '../screens/Portfolio';
import More from '../screens/More';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Markets"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icons: {[key: string]: any} = {
            Home: focused ? Icons.home : Icons.home,
            Markets: focused ? Icons.market : Icons.market,
            Wallets: focused ? Icons.wallet : Icons.wallet,
            Portfolio: focused ? Icons.portfolio : Icons.portfolio,
            More: focused ? Icons.more : Icons.more,
          };

          const imageSource = icons[route.name];
          return (
            <Image
              source={imageSource}
              style={[
                styles.image,
                focused ? styles.focusedColor : styles.defaultColor,
              ]}
            />
          );
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.darkGray,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Markets" component={Market} />
      <Tab.Screen name="Wallets" component={Wallet} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  focusedColor: {
    tintColor: Colors.blue,
  },
  defaultColor: {
    tintColor: Colors.darkGray,
  },
});

export default AppNavigator;
