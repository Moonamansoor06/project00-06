import * as React from 'react';
import { StoreProvider } from '../context/StoreContext';





export const wrapRootElement = (({element}) => {
  
  return (
    <StoreProvider    >
      {element}
      </StoreProvider>

  
  )
})