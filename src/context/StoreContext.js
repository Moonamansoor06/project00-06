import React, { createContext } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'zainiee.myshopify.com',
  storefrontAccessToken: "881489fd831f4ad0123c0314c71f1b63"
})


const state = {
 
  client: client,

  }



export const StoreContext = createContext()


export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={state}>
   
        {children}
 
    </StoreContext.Provider>
  )
}