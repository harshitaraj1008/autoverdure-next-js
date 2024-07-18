import updateProductsCache from "@/lib/server/updateProductsCache";
import {getCachedProducts} from "@/lib/redisClient";


export default async function findAllProducts(productType) { // assuming that the product names are zenpot/grobox/plants
    let productData = await getCachedProducts()
    
    if (!productData) {

        const result = await updateProductsCache();

        if (!result) {
            return false;
        } else {
            productData = await getCachedProducts();
        }
    }

    const products = JSON.parse(productData);

    return (products[productType] || false);
}