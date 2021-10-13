import * as React from 'react';
import { CartProvider } from 'use-shopping-cart'
import {loadStripe } from "@stripe/stripe-js"

/* const stripePromise=loadStripe("pk_test_51JMzsYJpRBqGCZM016PPP6pnXj7CM2i58pwF6FreVHFiCAPIO6TPTlgtPbD7QMu5vl6JKDuuGY8agKJVW0zke7aU00YPqWq69S") */
export const wrapRootElement = (({element}) => {
  
  return (
    <CartProvider
    
      cartMode="client-only"
      stripe={stripePromise}
      successUrl="http://localhost:8000/"
      cancelUrl="http://localhost:8000/404.js"
      currency="USD"
    
    >
      {element}
    </CartProvider>
  
  )
})