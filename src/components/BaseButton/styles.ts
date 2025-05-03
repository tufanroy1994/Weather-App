import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.PRIMARY_TEXT,
    padding: wp(3),
    width: wp(40),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColors.PRIMARY_BACKGROUND,
    fontSize: FontSizes.FONT_SIZE_25,
  },
});
