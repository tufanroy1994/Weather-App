import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999999999999999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: AppColors.LOADER_BACKGROUND,
  },
});
