import updateProductsCache from "@/lib/server/updateProductsCache";
import {getCachedProducts} from "@/lib/redisClient";

export default async function findProduct(productId, productType = false) {

    let productData = await getCachedProducts();

    if (!productData) {
        const result = await updateProductsCache();

        if (!result) {
            return false;
        } else {
            productData = await getCachedProducts();   
        }
    }

    const products = JSON.parse(productData);

    if (productType) {
        const currentProducts = products[productType];

        if (!currentProducts) {
            return false;
        }

        for (let product of currentProducts) {
            if (product.productId === productId) {
                return product;
            }
        }
    } else {
        const currentProducts = [...(products['plants'] ? products['plants'] : []), ...(products['grobox'] ? products['grobox'] : []), ...(products['zenpot'] ? products['zenpot'] : []), ...(products['accessory'] ? products['accessory'] : [])];

        if (!currentProducts) {
            return false;
        }

        for (let product of currentProducts) {
            if (product.productId === productId) {
                return product;
            }
        }
    }
    return false
}