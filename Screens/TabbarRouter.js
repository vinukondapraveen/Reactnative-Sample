import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Machines from '../Screens/MachinesPage';
import Favorites from '../Screens/Favorites';
import Profile from '../Screens/Profile';


export const TabStack = StackNavigator({
    Machines: {
      screen: Machines,
      navigationOptions: {
        title: 'Machines',
      },
    },


  });
  
  export const Tabs = TabNavigator({
    Machines: {
      screen: TabStack,
      navigationOptions: {
        tabBarLabel: 'Machines',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favorites',
            
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
  
  });
  

  
  export const Root = StackNavigator({
    Tabs: {
      screen: Tabs,
    },
  });
  