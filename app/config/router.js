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
    navigationOptions: {
      title: 'Contacts',
      header: (props) => ({
        left: <LeftDrawerButton {...props} />,
      }),
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: ({ state }) =>
        `${capitalizeFirstLetter(state.params.name.first)} ${capitalizeFirstLetter(state.params.name.last)}`,
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
      header: (props) => ({
        left: <LeftDrawerButton {...props} />,
      }),
    },
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact',
      header: (props) => ({
        left: <LeftDrawerButton {...props} />,
      }),
    },
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBar: {
        label: 'Contacts',
        icon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
      },
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBar: {
        label: 'Add',
        icon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />,
      },
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBar: {
        label: 'Me',
        icon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
      },
    },
  },
});

export const Drawer = DrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    drawer: {
      label: 'Contacts',
    },
  },
  NewContact: {
    screen: NewContactStack,
    drawer: {
      label: 'Add',
    },
  },
  Me: {
    screen: MeStack,
    drawer: {
      label: 'Me',
    },
  },
});
