import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import { loadStripe } from "@stripe/stripe-js"
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
  
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))



const Products = () => {
  const classes = useStyles()

    //let stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY)
 
  const data = useStaticQuery(graphql`
        query ProductPrices {
   allStripePrice {
    edges {
      node {
        id
        currency
        unit_amount
        product {
          id
          name
          description
          images
        }
      }
    }
  }
}

      `)
  console.log('data is ---', data)



  return (
<div className={classes.root}>
            <Grid
                container
              
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
  
      {
      data.allStripePrice.edges.map(( node , key) =>
     { return(
      
           
                        <Card  key={key} spacing={2} padding={4}>
          <ProductCard  product={node.node} />   
          </Card>
        
     

     )
}
)

}
</Grid>

    </div>

  )  
}
export default Products

