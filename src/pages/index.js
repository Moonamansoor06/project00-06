import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import "./App.css";


const promise = loadStripe("pk_test_51JMzsYJpRBqGCZM016PPP6pnXj7CM2i58pwF6FreVHFiCAPIO6TPTlgtPbD7QMu5vl6JKDuuGY8agKJVW0zke7aU00YPqWq69S");

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
