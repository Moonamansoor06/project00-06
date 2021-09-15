import * as React from "react"
import Products from './../components/Products'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = () => ({
  root: {
    flexGrow: 1,

  },

  toolbar: {
    alignItems: 'center',
    justifyContent: 'center',

    top: 'auto',
    bottom: 0,
  }
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div >
     <div style={{textAlign:'right', alignItems:"right", marginRight:'1rem', width:'99%', padding: '1rem',backgroundColor:'burlywood',color:'chocolate' , fontSize:'x-large'}} >
       <span className="snipcart-checkout">Proceed to checkout</span>
       <span style={{ padding: '1rem', fontSize:'large' }} >Cart item(s):</span>
       <span style={{ padding: '.005rem' , fontSize:'large'}}  className="snipcart-items-count"></span>
       <span style={{ padding: '1rem' , fontSize:'large'}} >Total:</span>
       <span style={{ padding: '.005rem' , fontSize:'large'}}  className="snipcart-total-price"></span>
     </div>
      <h1>Products List</h1>
     
      <Products />
      
   {/*    <div className={classes.root}>
      <AppBar position="fixed" className={classes.toolbar}>
        <Toolbar >
          <Button style={{ padding: '1rem' }} color="inherit" className="snipcart-checkout">proceed to checkout  </Button>
          <Typography style={{ padding: '1rem' }} variant="h6" >item(s)</Typography>
          <Typography style={{ padding: '.25rem' }} variant="h6" className="snipcart-items-count"> </Typography>
          <Typography style={{ padding: '1rem' }} variant="h6" >total cost</Typography>
          <Typography style={{ padding: '.25rem' }} variant="h6" className="snipcart-total-price"> cart total</Typography>
        </Toolbar>
      </AppBar>
      </div> */}
    </div>
  )
}
export default IndexPage
{/*  <button
    class="snipcart-add-item"
    data-item-id="jade bracelet"
    data-item-price="50"
    data-item-url="/"
    data-item-name="Jade Bracelet"
    data-item-description="perfect Jade bracelet for chineese wedding"
    data-item-image="https://thumbs.dreamstime.com/z/old-chinese-gold-jade-bracelet-isolated-white-background-149128889.jpg"
    data-item-size="small|medium[+5]|large[+5]"
    data-item-custom1-name="golden"
    data-item-custom1-type="checkbox"

    data-item-custom2-name="customer notes"
    
    >
    Add to Cart
    </button> */}