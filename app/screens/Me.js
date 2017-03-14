import React from 'react';
import { ScrollView } from 'react-native';

import { Header, Actions, Info, EditButton } from '../components/UserDetails';
import colors from '../config/colors';
import { me } from '../config/data';

const Me = () => (
  <ScrollView style={{ backgroundColor: colors.background }}>
    <Header {...me} />
    <EditButton />
    <Actions {...me} />
    <Info {...me} />
  </ScrollView>
);

export default Me;
