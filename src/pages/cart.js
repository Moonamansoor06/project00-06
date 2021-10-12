import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Link } from 'gatsby'
import {  Grid, Heading, Button } from 'theme-ui'


const Cart = () => {
    const { clearCart, cartDetails, incrementItem, decrementItem,removeItem,redirectToCheckout,totalPrice } = useShoppingCart();
    console.log('cart details',cartDetails)
    console.log(Object.keys(cartDetails))
    var cartTotal = 0
var itemTotal=0   

   if(Object.keys(cartDetails).length<=0)return(
   <div style={{width:'100%',height:'100%',justifyContent:'center'}}>
       <h1>Cart is Empty</h1>
       <Link to='/' style={{ color: 'black' }}   > go back to main page</Link>
   </div> 
   )
else
    return (
        <div>
            <div style={{ marginTop: "1rem", padding: ".5rem", marginBottom: "1rem" }}>
                <Link to='/' style={{ color: '#ada397' }}   > go back to main page</Link>
            </div>
            <div>
                <Grid gap={1} columns={[6]} style={{ border: 'solid .2rem #ada397', }}>
                    <Heading as='h3' >Name</Heading>
                    <Heading as='h2'>Price</Heading>
                     <Heading as='h2'>Quantity</Heading>
                    <Heading as='h2'>Image</Heading>
                    <Heading as='h2'>Total Price</Heading>
                </Grid>
            </div>
            <div>
           
              {Object.keys(cartDetails).map((item) => {

                   /*  itemTotal = Number(cartDetails[item].price)
                        console.log('item is  ',item) */
                        
                    return (
                        <Grid gap={1} columns={[6]} key={item.sku} style={{ border: 'solid .2rem #ada397', }}>
                            <Heading as='h3' >{cartDetails[item].name}</Heading>
                            <Heading as='h3'>{cartDetails[item].price}</Heading>
                         
                            <Heading as='h3' >{cartDetails[item].quantity}
                                <span ><Button  onClick={(()=>incrementItem(cartDetails[item].sku))} style={{color:'black',backgroundColor:'white'}}> + </Button>

                                    <Button onClick={(()=>decrementItem(cartDetails[item].sku))}style={{color:'black',backgroundColor:'white'}}> -</Button>
                                </span>


                            </Heading>
                            <Heading as='h3' style={{ width: '60px' }}>
                                {<img width="150px" src={cartDetails[item].image} />
                                }
                                <Button 
                                onClick={(()=>removeItem(cartDetails[item].sku))} 
                                style={{border:'.05rem solid #ada397',color:'black',backgroundColor:'white',width:'auto',height:'auto'}}>
                                    X</Button>
                            </Heading>
                            <Heading as='h3'style={{marginLeft:'.5rem'}}>{cartDetails[item].price*cartDetails[item].quantity}</Heading>
                        </Grid>
                    )
                })}

            </div>
            <div style={{ width: "95%", marginTop: "1rem", padding: ".5rem", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Heading as='h3' > Cart Total: {totalPrice}</Heading>
            </div>
            <button onClick={() => { clearCart(); }}
                style={{ width: "100%", marginTop: "1rem", padding: ".5rem" }}
            >Clear Cart</button>
           <button onClick={() => { redirectToCheckout(); }}
                style={{ width: "100%", marginTop: "1rem", padding: ".5rem" }}
            >Proceed to Checkout</button>
        </div>
    )
}


export default Cart
