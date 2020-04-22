const connection = require('../database/connection');

module.exports = {
    async saveAuthorization(request, response) {
        const { email } = request.body;
        const isRegister = await connection('users')
            .select('*')
            .where('email', email);
        
        if (!isRegister) {
            await connection('users').insert({ email })
        }

        return response.json({ email });
    },
    
    async index(request, response) {
        const users = await connection('users').select('*');
        
        return response.json({users});
    }
};