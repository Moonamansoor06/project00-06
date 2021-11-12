

import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Button, Grid, Card, Heading, Box, ThemeProvider } from 'theme-ui'
import Layout from "../components/layout"
import { theme } from '../theme'


const createCheckout = gql`
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
      lineItems(first:100){
        edges{
          node{
            quantity
            id
            title,
            variant{
              id
              title
          
              priceV2{
                amount
              }
            }
          }
        }
      }
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`

const addLineItem = gql`
mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
  checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
    checkout {
      id
      webUrl
      lineItems(first:100){
        edges{
          node{
            quantity
            id
            title,
            variant{
              id
              title
            
              priceV2{
                amount
              }
            }
          }
        }
      }
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`

export default function Home({ data }) {

  const [createCheckoutMutation, { data: checkoutData }] = useMutation(createCheckout, {
    update(cache, { data: { checkoutData } }) {
      cache.modify({
        fields: {
          checkout: checkoutData
        },

      })
    }
  })
  const [addLineItemMutation, { data: addLineItemData }] = useMutation(addLineItem, {
    update(cache, { data: { addLineItemData } }) {
      cache.modify({
        fields: {
          addLineItems(existingLineItems = []) {
            const newLineitemRef = cache.writeFragment({
              data: addLineItemData,
              fragment: gql`
                fragment NewLineItem on lineItem {
                  variantId
                  quantity
                }
              `
            });
            return [...existingLineItems, newLineitemRef];
          }
        }
      });
    }
  });
  console.log('line aitem data', addLineItemData)
  console.log('checkjout data', checkoutData)


  useEffect(() => {
    (async () => {

      const response = await createCheckoutMutation({
        variables: {
          input: {}
        }
      });
      console.log("checkout session created ", response);



    })()



  }, [])



  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div style={{ display: 'flex', position: 'flex-end' }}>
          <div>
            <Button onClick={() => {
              window.open(checkoutData.checkoutCreate.checkout.webUrl)
            }}>
              Checkout
            </Button>
          </div>

        </div>
        <h1>Products</h1>
        <Grid gap={1} columns={[3]}>

          {data.allShopifyProduct.edges.map(({ node }, key) => (
            <Card key={node.shopifyId}>
              <Heading as='h2'>
                <div>{node.title}</div>

                <div style={{ paddingTop: '.5rem' }}>
                  <img src={node.images[0].originalSrc} />
                </div>


              </ Heading >
              <div> Description: {node.description}</div>
              {node && node.variants && node.variants.map((varProd) => {

                return (

                  <Grid key={varProd.sku} columns={[2]}>
                    <Box style={{ width: '80px', padding: '1px' }}> Size: {varProd.title}</Box>
                    <Box style={{ width: '150px', padding: '1px' }}>Price: {varProd.price}</Box>

                    {console.log('variant i d', varProd.id)}
                    <Button onClick={async () => {
                      console.log("add to cart clicked");

                      const responseAfterAdd = await addLineItemMutation({
                        variables: {
                          lineItems: [
                            {
                              quantity: 1,
                              variantId: varProd.id.split("__")[2]
                            }
                          ],
                          checkoutId: checkoutData.checkoutCreate.checkout.id
                        }
                      });
                      console.log("resposne after adding line item = ", responseAfterAdd);
                    }}>Add to Cart</Button>
                  </Grid>)
              })}  </Card>
          ))}
        </Grid>

      </Layout>
    </ThemeProvider>
  )
}



export const query = graphql`
{
  allShopifyProduct {
    edges {
      node {
        handle
        id
        title
        shopifyId
        variants {
          price
          sku
          title
          id
        }
        images {
          originalSrc
        }
        description
      }
    }
  }
}
`
