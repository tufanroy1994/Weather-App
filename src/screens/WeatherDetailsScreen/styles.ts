import {StyleSheet} from 'react-native';
import {FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: wp(20),
  },
  temp: {
    fontSize: FontSizes.FontSizes_40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(5),
  },
  icon: {
    width: wp(18),
    height: wp(18),
    marginRight: wp(4),
  },
  condition: {
    fontSize: FontSizes.FONT_SIZE_25,
  },
  humidity: {
    fontSize: FontSizes.FONT_SIZE_25,
  },
  buttonContainer: {
    paddingTop: wp(30),
  },
});
