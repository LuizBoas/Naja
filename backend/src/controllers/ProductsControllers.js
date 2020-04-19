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
        const products = await connection('products')
            .select('*');
        
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

    async getSingle(request, response) {
        const { id } = request.params;

        const products = await connection('products')
            .select('*')
            .where('id', id);
        
        return response.json(products);
    }
};