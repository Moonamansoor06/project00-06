import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://zainieest-shirts.myshopify.com/api/graphql",
        fetch,
        headers: {
            "X-Shopify-Storefront-Access-Token": "68a3a356fe2ea58e8c17628cffcc9d64"
        }
    }),
    cache: new InMemoryCache()
})

console.log('client is from clientjs',client)
