import React, {memo} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import BaseText from '../BaseText';
import {AppColors} from '../../utils';
import {styles} from './styles';

interface BaseFormInputProps {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleText?: TextStyle;
  inputContainerStyle?: ViewStyle;
}

const BaseFormInput = ({
  title,
  containerStyle,
  titleText,
  inputContainerStyle,
  ...props
}: BaseFormInputProps & TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && (
        <BaseText style={[styles.titleText, titleText]}>{title}</BaseText>
      )}
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        <TextInput
          placeholderTextColor={AppColors.TAB_BORDER}
          {...props}
          style={[styles.inputStyle, props.style]}
        />
      </View>
    </View>
  );
};

export default memo(BaseFormInput);
