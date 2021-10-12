import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Heading, Button } from 'theme-ui'
import { Grid } from 'theme-ui'
import { Card } from 'theme-ui'


export default function Product({product}) {
  console.log('images',product.image)
  const { addItem } = useShoppingCart();
  return (
    <Grid gap={1} columns={[3]}>
   <Card  >
        <Heading as='h2'>         
             <span itemProp="headline" >{product.name}</span>
            <div style={{ width: '200px', paddingTop: '.5rem' }}>
              <img src={product.image} alt={product.name}  style={{ width: '150px', paddingTop: '.5rem' }}/>
            </div>         
        </Heading>
           <Button onClick={() => { (addItem(product)) }}
          style={{width:'150px',height:'220px', justifySelf: 'baseline' }}>Add to Cart
        </Button>
      </Card>
    </Grid>
  )
}
