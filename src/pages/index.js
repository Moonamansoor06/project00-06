import React from 'react'
import { useEffect, useContext,useState } from "react"
import { Link, graphql, navigate } from "gatsby"
import { Button, Grid, Card, Heading, Box, ThemeProvider } from 'theme-ui'
import Layout from "../components/layout"
import { theme } from '../theme'
import { StoreContext } from "../context/StoreContext"
/* import Client from 'shopify-buy'



const client = Client.buildClient({
  domain:'zainiee.myshopify.com',
  storefrontAccessToken: "881489fd831f4ad0123c0314c71f1b63"
})
 */


const Home = ({ data }) => {
   const [checkoutSession, setCheckoutSession] = useState(); 

 // const dispatch = useContext(StoreReducerContext)
  const {client}= useContext(StoreContext)
  console.log("client is ====",client)
 
   useEffect(()=>{
     (async () =>{
       const session = await client.checkout.create();
       console.log("session = ",session);
      setCheckoutSession(session);
       localStorage.setItem("checkoutid",session.id); 
     })()
   },[]);




  console.log('DATA IS .....', data.allShopifyProduct.edges)
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div style={{ display: 'flex', position: 'flex-end' }}>
          <Button onClick={() => {
            navigate("/cart");
          }}> Go to Cart</Button>
        </div>
        <h1>Products</h1>
        <Grid gap={1} columns={[3]}>
          {data.allShopifyProduct.edges.map(({ node }, key) => (
            <Card key={node.shopifyId}>
              <Heading as='h2'>
                <Link style={{ color: ' #c94c4c' }} to={`/products/${node.handle}`}>{node.title}</Link>
                <div style={{ paddingTop: '.5rem' }}>
                  <img src={node.images[0].originalSrc} />
                </div>

                <div> Description: {node.description}</div>
              </ Heading >
              {node.variants.map((varProd) => {
                console.log('product', varProd.id)
                return (

                  <Grid key={varProd.sku} columns={[2]}>
                    <Box style={{ width: '80px', padding: '1px' }}> Size: {varProd.title}</Box>
                    <Box style={{ width: '150px', padding: '1px' }}>Price: {varProd.price}</Box>
                    <Button onClick={async()=>{
                                var varId=varProd.id
                                console.log('var id is ',varId)
                                const session = await client.checkout.addLineItems(checkoutSession.id,[
                                  {
                                    variantId: varId,
                                    quantity: 1
                                  }
                                ]);
                                setCheckoutSession(session);
                                
            
                                console.log("Test = ",session);
                              }} 
                            >Add To Cart</Button>
                  </Grid>)
              })}     </Card>
          ))}
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}
export default Home

export const query = graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
      node {
        handle
        title
        productType
        shopifyId
        description
        priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        variants {
          id
          displayName
          title
          price
          sku
          product {
            description
          }
        }
        images {
          originalSrc
        }
      }
    }
      }
    }
  `