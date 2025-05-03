import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, hp, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {},
  titleText: {
    color: AppColors.PRIMARY_TEXT,
    marginHorizontal: wp(1),
    marginBottom: wp(2),
    fontSize: FontSizes.FONT_SIZE_25,
    fontWeight: '900',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    borderColor: AppColors.TAB_BORDER,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    height: hp(6),
    marginBottom: wp(8),
  },
  inputStyle: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_25,
    color: AppColors.PRIMARY_TEXT,
    padding: 0,
    paddingVertical: hp(0.7),
  },
});
