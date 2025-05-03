import {StyleSheet} from 'react-native';
import {wp} from '../../utils';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: wp(40),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: wp(30),
  },
});
