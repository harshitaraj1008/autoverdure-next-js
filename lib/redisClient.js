import { createClient } from 'redis';

const client = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true,
    },
});

client.on('error', (err) => {
    console.log('Error ' + err);
});

(async () => {
    await client.connect();
})();

async function setCachedProducts(productData) {
    try {
        const data = await client.set('products', JSON.stringify(productData));
        return true; 
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getCachedProducts() {
    try {
        const data = await client.get('products');
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {setCachedProducts, getCachedProducts};