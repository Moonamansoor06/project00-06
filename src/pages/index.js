import React from 'react'
import { useState} from "react"
import { graphql } from "gatsby"
import { useShoppingCart } from 'use-shopping-cart'
import Layout from "../components/layout"
import CartStatus from "../components/CartStatus"
import { ThemeProvider, Input, Label } from 'theme-ui'
import { theme } from '../theme'
import { Grid } from 'theme-ui'


import Product from '../components/Product'


const productData = [
  {
    name: 'BloomSofa',
    sku: 'price_1Jg2S8JpRBqGCZM07NgqfZpI',
    price: 25000,
    image: 'https://brabbu.com/blog/wp-content/uploads/2014/11/Ideas-for-contemporary-bedrooms-the-2-seater-sofa-9.jpg',
    currency: 'PKR',
    type:'Sofa'
  },
  {
    name: 'Bonaldo bed',
    sku: 'price_1Jh905JpRBqGCZM08YmOL0Fa',
    price: 30000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzc46d2NfQNLYS-dT51Hw-eW04PrTbdzc2XXbtEfgH3HcQJt0CvN0UgG97j_6BDNzdaRI&usqp=CAU',
    currency: 'PKR',
    type:'Bed'
  },
  {
    name: 'Clip Art Beach Chair',
    sku: 'price_1Jg2QpJpRBqGCZM0sFCMXSY0',
    price: 10000,
    image: 'https://trekbaron.com/wp-content/uploads/2021/03/types-of-beach-chairs-mar262021.jpg',
    currency: 'PKR',
    type:'Chair'
  },
  {
    name: 'Gray Bed',
    sku: 'price_1Jh96iJpRBqGCZM0V77VDhyk',
    price: 80000,
    image: 'https://iwood.pk/wp-content/uploads/2018/09/stylidsn.jpg',
    currency: 'PKR',
    type:'Bed'
  },
  {
    name: 'Extendable Bed',
    sku: 'price_1Jg2OYJpRBqGCZM05anKBojg',
    price: 80000,
    image: 'https://maqboolinterior.pk/wp-content/uploads/2020/09/Foldable-Sofa-Cum-Bed-300x222.jpg',
    currency: 'PKR',
    type:'Bed'
  },
  {
    name: 'Modern sofa lounge',
    sku: 'price_1Jh9FsJpRBqGCZM0oGVY4zWP',
    price: 100000,
    image: 'https://5.imimg.com/data5/RR/BH/WK/SELLER-31318314/stylish-lounge-sofa-500x500.jpg',
    currency: 'PKR',
    type:'Sofa'
  },
  {
    name: 'Revolving Chair',
    sku: 'price_1Jg2UsJpRBqGCZM0ilzMjwZL',
    price: 17999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSium4DgOrOSnTs_KrNqwN_zDYNVNXGDthRGg&usqp=CAU',
    currency: 'PKR',
    type:'Chair'

  },
  {
    name: 'Single Sofa Bed chair',
    sku: 'price_1Jg2W7JpRBqGCZM01gl1oaU3',
    price: 50000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-pGyYgfZC9v1kF5JiELnflcHQXKNXqm5OA&usqp=CAU',
    currency: 'PKR',
    type:'Chair'
  },
  {
    name: 'Sofa cum doublebed',
    sku: 'price_1Jh9PnJpRBqGCZM0M8lzHkZ0',
    price: 95000,
    image: 'https://maqboolinterior.pk/wp-content/uploads/2020/09/2-Seater-Sofa-Cum-Bed.jpg',
    currency: 'PKR',
    type:'Sofa'
  }
]

const Home = (props) => {

  const emptyQuery = ""
  const imageState = []
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  const siteTitle = props.data.siteData.siteMetadata.title || `Title`
  const allProductPost = productData
  console.log('product data', allProductPost)
  console.log('props  data', props.data.allImageSharp.edges)
  const location = props.location
  const { clearCart } = useShoppingCart();

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const productPost = productData
    const filteredData = productPost.filter(post => {
      const { type } = post
      let eventTarget = event.target.value
      let text = eventTarget.slice(0, 1).toUpperCase() + eventTarget.slice(1, eventTarget.length).toLowerCase();
      if (type === text)
        return (
          type
        )
    })
    console.log('filtered data', filteredData)
    setState({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allProductPost
  return (

    <ThemeProvider theme={theme}>

      <Layout location={location} title={siteTitle}>
        <div style={{ margin: '1rem', color: '#ada397' }}>

          <CartStatus />
          <div style={{ margin: '1rem', color: '#ada397', display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <button onClick={() => { clearCart(); }}
              style={{ width: "20%", marginTop: "1rem", padding: ".5rem", color: 'white', backgroundColor: '#ada397' }}
            >Clear Cart</button>
          </div >
          <div style={{ margin: '1rem', color: '#ada397', display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <Label style={{ width: "10%" }}>Search by Category</Label>
            <Input style={{ width: "20%" }} defaultValue="" onChange={((e) => { handleInputChange(e) })} />
          </div>
        </div>

        <Grid gap={1} columns={[3]}>
          {posts.map((product) => {
            return (
              <div key={product.sku}>
                <Product product={product} />
              </div>


            )
          })}
        </Grid>
      </Layout>
    </ThemeProvider >
  )
}

export default Home


export const pageQuery = graphql`
  query {
   siteData: site {
      siteMetadata {
        title
      }
    }

 allImageSharp {
    edges {
      node {
        gatsbyImageData(width: 200)
        fluid {
          src
          originalName
        }
      }
    }
  }
    }
 
`

