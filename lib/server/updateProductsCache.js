import { db } from "/pages/api/firebaseAdmin";
import {setCachedProducts} from "@/lib/redisClient";

async function findProductImages(productId) {
    const productImagesRef = db.collection('productImages');
    const productImagesQuerySnapshot = await productImagesRef.where('productId', '==', productId).get();

    const productImagesArray = [];

    productImagesQuerySnapshot.forEach(doc => {
        productImagesArray.push(doc.data());
    })

    const productImages = productImagesArray[0];
    const imageIds = [productImages.firstImageId, productImages.secondImageId, productImages.thirdImageId];
    
    if (productImages.fourthImageId) {
        imageIds.push(productImages.fourthImageId);
    } 

    if (productImages.fifthImageId) {
        imageIds.push(productImages.fifthImageId);
    }
    const imagesRef = db.collection('images');
    const imagesQuerySnapshot = await imagesRef.where('imageId', 'in', imageIds).get();

    let titleImage;
    const rest = [];

    imagesQuerySnapshot.forEach(doc => {
        const data = doc.data()

        if (data.imageId !== imageIds[0]) {
            rest.push(doc.data().publicUrl);
        } else {
            titleImage = data.publicUrl
        }
    })

    const imageUrls = [titleImage];

    rest.forEach(ele => {
        imageUrls.push(ele);
    })

    return imageUrls;
}

export default async function updateProductsCache() {
    try {
        const productsRef = db.collection('products');
        const plantsQuerySnapshot = await productsRef.where('productType', '==' , 'plants').get();

        let plants = [];

        plantsQuerySnapshot.forEach(async doc => {
            let product = doc.data();
            plants.push(product);
        });

        for (let product of plants) {
            const imageUrls = await findProductImages(product.productId);
            product['productImages'] = imageUrls;
        }

        const zenpotsQuerySnapshot = await productsRef.where('productType', '==' , 'zenpot').get();

        let zenpots = [];

        zenpotsQuerySnapshot.forEach(async doc => {
            let product = doc.data();
            zenpots.push(product);
        });

        for (let product of zenpots) {
            const imageUrls = await findProductImages(product.productId);
            product['productImages'] = imageUrls;
        }

        const groboxesQuerySnapshot = await productsRef.where('productType', '==', 'grobox').get();

        let groboxes = [];

        groboxesQuerySnapshot.forEach(async doc => {
            let product = doc.data();
            groboxes.push(product);
        })

        for (let product of groboxes) {
            const imageUrls = await findProductImages(product.productId);
            product['productImages'] = imageUrls;
        }

        const accessoriesQuerySnapshot = await productsRef.where('productType', '==', 'accessory').get();

        let accessories = [];

        accessoriesQuerySnapshot.forEach(async doc => {
            let product = doc.data();
            accessories.push(product);
        })

        for (let product of accessories) {
            const imageUrls = await findProductImages(product.productId);
            product['productImages'] = imageUrls;
        }

        const timestamp = new Date().getTime();

        const productData = {
            lastUpdateTimestamp: timestamp,
            grobox: groboxes,
            plants: plants,
            zenpot: zenpots, 
            accessory: accessories
        }

        const result = await setCachedProducts(productData)

        if (result) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return false
    }
}