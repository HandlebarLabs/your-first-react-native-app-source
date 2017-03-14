import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
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
    screen: NewContact,
    navigationOptions: {
      tabBar: {
        label: 'Add',
        icon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />,
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: 'Me',
        icon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
      },
    },
  },
});
