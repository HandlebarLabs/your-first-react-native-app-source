/* eslint-disable react/prop-types */

import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Contacts from '../screens/Contacts';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import { DrawerButton } from '../components/Header';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const LeftDrawerButton = ({ navigate }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
  }

  return null;
};

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: props => ({
      title: 'Contacts',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: props => ({
      title: `${capitalizeFirstLetter(
        props.navigation.state.params.name.first,
      )} ${capitalizeFirstLetter(props.navigation.state.params.name.last)}`,
    }),
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: props => ({
      title: 'Me',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: props => ({
      title: 'New Contact',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name={`${ICON_PREFIX}-list`}
          size={35}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name={`${ICON_PREFIX}-add`}
          size={35}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name={`${ICON_PREFIX}-contact`}
          size={35}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export const Drawer = DrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      drawerLabel: 'Contacts',
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      drawerLabel: 'Add',
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      drawerLabel: 'Me',
    },
  },
});
