import React, { useState } from "react"
//import getStripe from "../../utils/stripejs"
import { loadStripe } from "@stripe/stripe-js"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
});


const formatPrice = (amount, currency) => {
  
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

function ProductCard (prod,{location} ) {
  const [loading, setLoading] = useState(false)
console.log('product is =======>',prod,process.env.STRIPE_SECRET_KEY)
const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>

  let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51JMzsYJpRBqGCZM016PPP6pnXj7CM2i58pwF6FreVHFiCAPIO6TPTlgtPbD7QMu5vl6JKDuuGY8agKJVW0zke7aU00YPqWq69S")
  }
  return stripePromise
}
 
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
         PRODUCTS
        </Typography>
        <Typography variant="h5" component="h2">
        {prod.product.product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {prod.product.product.description}
        </Typography>
        <Typography variant="body2" component="p">
        {formatPrice(prod.product.unit_amount, prod.product.currency)}
        </Typography>
      </CardContent>
      <CardContent
        className={classes.media}
        image={prod.product.product.images.map((img,key)=><CardMedia key={key}>{img}</CardMedia>)}
        title="item"
      />
      <CardActions>
      <Button 
      class="snipcart-add-item"
      data-item-id={prod.product.id}
      data-item-price={prod.product.unit_amount}
      data-item-url="/"
      data-item-name={prod.product.product.name}
      data-item-description={prod.product.product.description}
      data-item-image={prod.product.product.images[0]}
         
        >
        Add { prod.product.product.name  } to cart
        </Button>
      </CardActions>
    </Card>
   
   
 )
}

export default ProductCard