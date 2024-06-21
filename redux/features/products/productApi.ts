import { apiSlice } from "../api/apiSlice";


export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getProducts : builder.query({
            query: () => ({
                url: "products",
                method: "GET",
                // params: args,
                credentials: "include" as const
            })
        })
    })
})

export const {useGetProductsQuery} = productApi