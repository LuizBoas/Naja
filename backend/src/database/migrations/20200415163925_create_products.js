
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('tag').notNullable();
        table.int('countert').notNullable();
        table.decimal('value').notNullable();
        table.string('photo').notNullable(); /* a pesquisar tipo*/
        
        /*lembrar de dar o "npx knex migrate:latest" quando adcionar os elemenos a entidade*/
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
