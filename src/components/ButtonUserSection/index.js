import React from 'react';

import { Button } from './styles';

function ButtonUserSection ({children, ...rest}) {
  return(
    <Button {...rest}>
      {children}
    </Button>
  );
}

export default ButtonUserSection;