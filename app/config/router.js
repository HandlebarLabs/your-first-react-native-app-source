/* eslint-disable react/prop-types */

import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import { DrawerButton } from '../components/Header';

const LeftDrawerButton = ({ navigate }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
  }

  return null;
};

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});


export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: ({ navigation }) => ({
      title: 'Me',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: ({ navigation }) => ({
      title: 'New Contact',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
    },
  },
});

export const Drawer = DrawerNavigator({
  Contact: {
    screen: ContactsStack,
    navigationOptions: {
      drawerLabel: 'Contacts',
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      drawerLabel: 'New Contact',
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      drawerLabel: 'Me',
    },
  },
});

