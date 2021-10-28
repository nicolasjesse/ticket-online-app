import Snackbar from 'react-native-snackbar';
import { snackBar } from '../config/configs.json';

import { colors } from '../config/theme.json';

export const show = (text: string) => Snackbar.show({
  text,
  duration: Snackbar.LENGTH_SHORT,
  textColor: colors.white,
  backgroundColor: colors.green,
});

export const error = (text: string) => Snackbar.show({
  text,
  duration: snackBar.durationError,
});
