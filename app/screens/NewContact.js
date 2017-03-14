import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';

import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';
import colors from '../config/colors';

const fields = [
  { placeholder: 'First Name', stateKey: 'firstName' },
  { placeholder: 'Last Name', stateKey: 'lastName' },
  { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
  { placeholder: 'Mobile Phone', stateKey: 'mobilePhone' },
  { placeholder: 'Home Phone', stateKey: 'homePhone' },
  { placeholder: 'City', stateKey: 'city' },
  { placeholder: 'Birthday', stateKey: 'birthday' },
  { placeholder: 'Registered', stateKey: 'registered' },
  { placeholder: 'Username', stateKey: 'username' },
];

class NewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  };

  handleSubmit = (index, override) => {
    if (index === fields.length - 1 || override) {
      alert('Submit');
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
        {fields.map((field, index) => (
          <TextInput
            key={field.stateKey}
            ref={(input) => this[field.stateKey] = input}
            value={this.state[field.stateKey]}
            onChangeText={(text) => this.onInputChange(text, field.stateKey)}
            returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
            onSubmitEditing={() => this.handleSubmit(index)}
            {...field}
          />
        ))}
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            text="Save"
            onPress={() => this.handleSubmit(0, true)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default NewContact;
