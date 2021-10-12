import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import {Link} from 'gatsby'
import './CartStatus.css'

export default function CartStatus() {
  const { totalPrice, cartCount, clearCart } = useShoppingCart();
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
      <div><Link to="/cart" style={{color:'#ada397'}}>Cart </Link> </div>
      <div className="statusMargin">Total Price: {totalPrice}</div>
      <div className="statusMargin">Count: {cartCount}</div>

    </div>
  )
}