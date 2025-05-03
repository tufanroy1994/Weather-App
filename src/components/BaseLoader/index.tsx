import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {AppColors} from '../../utils';
import {styles} from './styles';

const BaseLoader = (props: any) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={AppColors.PRIMARY_BACKGROUND} {...props} />
    </View>
  );
};

export default memo(BaseLoader);
