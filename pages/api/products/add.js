import uploadImage from "/lib/server/saveImage";
import { db } from "/pages/api/firebaseAdmin";
import currentUser from "/lib/server/currentUser";
import crypto from "crypto";
import * as formidable from 'formidable';
import fs from 'fs';
import { promisify } from 'util';
import updateProductsCache from "@/lib/server/updateProductsCache";

const readFile = promisify(fs.readFile);

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const user = await currentUser(req);

        if (!user || !user.admin) {
            res.status(403).json({ error: "Access denied." });
            return;
        }

        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {

            if (err) {
                return res.status(500).json({ error: 'Error parsing form data' });
            }

            try {
                const { productName, productDetails, productPrice, innerHeight, innerLength, type, dimensions, petFriendly, notPetFriendly, moreSunlight, lessSunlight, white, cream, lightGrey, darkGrey, black, L, XL, XS, S, M, stockQuantity } = fields;
                const productId = crypto.randomBytes(8).toString('hex');

                const firstImageBuffer = await readFile(files.firstImage[0].filepath);
                const secondImageBuffer = await readFile(files.secondImage[0].filepath);
                const thirdImageBuffer = await readFile(files.thirdImage[0].filepath);
                const fourthImageBuffer = await readFile(files.fourthImage[0].filepath);
                const fifthImageBuffer = await readFile(files.fifthImage[0].filepath);

                const firstImageBytes = Array.from(new Uint8Array(firstImageBuffer));
                const secondImageBytes = Array.from(new Uint8Array(secondImageBuffer));
                const thirdImageBytes = Array.from(new Uint8Array(thirdImageBuffer));
                const fourthImageBytes = Array.from(new Uint8Array(fourthImageBuffer));
                const fifthImageBytes = Array.from(new Uint8Array(fifthImageBuffer));

                const firstImageId = await uploadImage(firstImageBytes);
                const secondImageId = await uploadImage(secondImageBytes);
                const thirdImageId = await uploadImage(thirdImageBytes);
                const fourthImageId = await uploadImage(fourthImageBytes);
                const fifthImageId = await uploadImage(fifthImageBytes);

                if (!firstImageId || !secondImageId || !thirdImageId || !fourthImageId || !fifthImageId) {
                    res.status(500).json({ error: `Could not upload one of the images` });
                    return;
                }

                try {
                    await db.collection('productImages').doc(productId).set({ productId:productId, firstImageId: firstImageId, secondImageId: secondImageId, thirdImageId: thirdImageId, fourthImageId: fourthImageId, fifthImageId: fifthImageId })
                } catch (error) {
                    res.status(500).json({ error: `Could not upload image ids to productImages database. Error: ${error}` });
                    return;
                }

                const productData = {
                    productId: productId,
                    productName: productName[0],
                    productType: type[0],
                    productDescription: productDetails[0],
                    productPrice: productPrice[0],
                    innerHeight: innerHeight[0], 
                    innerLength: innerLength[0],
                    dimensions: dimensions[0],
                    petFriendly: petFriendly[0],
                    petUnfriendly: notPetFriendly[0],
                    moreLight: moreSunlight[0],
                    lessLight: lessSunlight[0],
                    L: (L ? L[0] : 'false'),
                    XL: (XL ? XL[0] : 'false'),
                    XS: (XS ? XS[0] : 'false'), 
                    S: (S ? S[0] : 'false'),
                    M: (M ? M[0] : 'false'),
                    white: (white ? white[0] : 'false'),
                    cream: (cream ? cream[0] : 'false'),
                    lightGrey: (lightGrey ? lightGrey[0] : 'false'),
                    darkGrey: (darkGrey ? darkGrey[0] : 'false'),
                    black: (black ? black[0] : 'false'),
                    stockQuantity: parseInt(stockQuantity)
                }

                try {
                    await db.collection('products').doc(productId).set(productData);
                } catch (error) {
                    res.status(500).json({ error: `Could not upload product to the database. Error: ${error}` });
                    return;
                }
                
                await updateProductsCache();
                res.status(200).json({ id: productId });
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: 'There was an error while converting the images to bytes' });
            }

        })

    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
        return;
    }
}