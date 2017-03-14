import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginLeft: 20,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 15,
  },
  input: {
    width: window.width,
    height: 40,
  },
});
