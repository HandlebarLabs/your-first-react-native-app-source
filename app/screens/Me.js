import React from 'react';
import { ScrollView } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails';
import { PrimaryButton } from '../components/Buttons';
import colors from '../config/colors';
import { me } from '../config/data';

const Me = () => (
  <ScrollView style={{ backgroundColor: colors.background }}>
    <Header {...me} />
    <PrimaryButton text="Edit Profile" onPress={() => null} />
    <Actions {...me} />
    <Info {...me} />
  </ScrollView>
);

export default Me;
