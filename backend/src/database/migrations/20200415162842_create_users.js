
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('authorization').notNullable();
       /*lembrar de dar o "npx knex migrate:latest" quando adcionar os elemenos a entidade*/
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
