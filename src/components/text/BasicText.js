import React from 'react';
import variables from '../../util/utils';

import Text from './Text';

export const textSize = {
  MEDIUM: variables.fontSizePMedium,
  SMALL: variables.fontSizePSmall,
  EX_SMALL: variables.fontSizeSubtext,
};

function BasicText({
  children,
  size = textSize.MEDIUM,
  fontFamily = variables.PoppinsRegular,
  ...props
}) {
  return (
    <Text
      fontSize={size}
      color={variables.colorBlack}
      fontFamily={fontFamily}
      {...props}>
      {children}
    </Text>
  );
}

export default BasicText;
