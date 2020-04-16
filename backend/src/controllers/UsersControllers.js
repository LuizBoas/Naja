const connection = require('../database/connection');

module.exports = {
    async saveAuthorization(request, response) {
        const {authorization} = request.body;

        await connection('users').insert({
            authorization
        })

        return response.json({authorization});
    },
    async index(request, response) {
        const users = await connection('users').select('*');
        
        return response.json({users});
    }
};