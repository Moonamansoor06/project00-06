import React, { useContext ,useEffect,useState} from "react"
import {  Grid,  Heading, ThemeProvider } from 'theme-ui'
//import Client from 'shopify-buy'
import Layout from "../components/layout";
import { theme } from '../theme'
import { StoreContext } from "../context/StoreContext"

/* const client = Client.buildClient({
    domain: `zainiee.myshopify.com`,
    storefrontAccessToken: "881489fd831f4ad0123c0314c71f1b63"
})
 */

export default function Cart() {
    //const dispatch = useContext(StoreReducerContext)
    const { client }= useContext(StoreContext)
  


    const [checkoutSession, setCheckoutSession] = useState();
    useEffect(() => {
        (async () => {
            const session = await client.checkout.fetch(localStorage.getItem("checkoutid"));
            setCheckoutSession(session);
            console.log("session loadded test = ", session);
            console.log("checkoutSession.lineItems = ", checkoutSession.lineItems);
        })()
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <div>
                    <Heading as='h1'>Cart</Heading>
                    <div>
                        <button onClick={() => {

                            window.open(checkoutSession.webUrl);

                        }}>Checkout</button>
                    </div>
                    <div>
                        <Grid gap={1} columns={[6]} style={{ border: 'solid .2rem #ada397', }}>
                            <Heading as='h3' >Name</Heading>
                            <Heading as='h2'>Image</Heading>
                            <Heading as='h2'>Price</Heading>
                            <Heading as='h2'>Quantity</Heading>
                        </Grid>
                    </div>
                    {
                        checkoutSession && checkoutSession.lineItems.map((item) => (
                            <Grid key={item.id} style={{ border: 'solid .2rem #ada397', }} >
                                <Heading as='h3'>
                                    Name: {item.title}
                                </Heading>
                                <Heading as='h3'>
                                    <img width="100px" src={item.variant.image.src} />
                                </Heading>
                                <Heading as='h3'>
                                    Price: {item.variant.price}
                                </Heading>
                                <Heading as='h3'>
                                    quantity: {item.quantity}
                                </Heading >
                                <Heading as='h3'>
                                    <button onClick={async () => {
                                        const sessionAdd = await client.checkout.updateLineItems(checkoutSession.id, [
                                            {
                                                id: item.id,
                                                quantity: item.quantity + 1
                                            }
                                        ])
                                        setCheckoutSession(sessionAdd);
                                        console.log("seesion after = ", sessionAdd);
                                    }}>
                                        +
                                    </button>
                                    <button onClick={async () => {
                                        const sessionAdd = await client.checkout.updateLineItems(checkoutSession.id, [
                                            {
                                                id: item.id,
                                                quantity: item.quantity - 1
                                            }
                                        ])
                                        setCheckoutSession(sessionAdd);
                                        console.log("seesion after = ", sessionAdd);
                                    }}>
                                        -
                                    </button>
                                    <div>
                                        <button onClick={async () => {
                                            const sessionMinus = await client.checkout.removeLineItems(checkoutSession.id, item.id).then((checkout) => {
                                                console.log(checkout.lineItems);
                                            })
                                            setCheckoutSession(sessionMinus);
                                        }}>Delete</button>
                                    </div>
                                </Heading>
                            </Grid>
                        ))
                    }
                </div>
            </Layout>
        </ThemeProvider>
    );
}