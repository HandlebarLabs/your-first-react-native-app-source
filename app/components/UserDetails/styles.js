import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const window = Dimensions.get('window');
export const ICON_SIZE = 25;

export default StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: window.width / 2,
    height: window.width / 2,
    borderRadius: window.width / 4,
  },
  name: {
    fontSize: 22,
    color: colors.primaryText,
    marginTop: 10,
  },
  actionContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    backgroundColor: colors.grayBackground,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionInfo: {
    flexDirection: 'column',
  },
  actionIcons: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginLeft: 13,
  },
  actionLabel: {
    color: colors.subtleText,
    fontSize: 12,
    marginBottom: 3,
  },
  actionBody: {
    fontSize: 16,
    color: colors.primaryText,
    marginBottom: 5,
  },
  infoContainer: {
    paddingVertical: 15,
  },
});
