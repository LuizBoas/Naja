const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, tag, amount, price, image } = request.body;
        const user = request.headers.authorization;

        const [id] = await connection('products')
            .insert({
                user,
                name,
                tag,
                amount,
                price,
                image,
            });

        return response.json({ id });
    },

    async index(request, response) {
        const [count] = await connection('products').count()
        const products = await connection('products')
            .select('*')
            .orderBy('amount');

        response.header('count-first', count ['count(*)'])
        return response.json(products);
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('products')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },

    async putAmount(request, response) {
        const { id } = request.params;

        await connection('products')
            .where('id', id)
            .update({ amount: request.body.amount });
        
        return response.status(204).send();
    },

    async putPrice(request, response) {
        const { id } = request.params;

        await connection('products')
            .where('id', id)
            .update({ price: request.body.price });
        
        return response.status(204).send();
    },

    async putImage(request, response) {
        const { id } = request.params;

        await connection('products')
            .where('id', id)
            .update({ image: request.body.image });
        
        return response.status(204).send();
    },

    async getSingle(request, response) {
        const { id } = request.params;

        const products = await connection('products')
            .select('*')
            .where('id', id);
        
        return response.json(products);
    },

    async getTag(request, response) {
        const { id } = request.params;

        const products = await connection('products')
            .select('id')
            .where('tag', id.tag);
        
        return response.json(products);
    },
};