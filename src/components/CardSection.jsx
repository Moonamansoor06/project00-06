/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import { CardNumberElement,CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js';
import "./cardSection.css";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <div className="formClass">
      <label className="heading">
        Card details  </label>
        <div className="cardElement">
        {/*    <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
        <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
          <CardExpiryElement  options={CARD_ELEMENT_OPTIONS} />
          <CardCvcElement  options={CARD_ELEMENT_OPTIONS} />
      
</div>
    
    </div>
  );
};

export default CardSection;