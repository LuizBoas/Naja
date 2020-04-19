
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments();
        table.string('user').notNullable();
        table.string('name').notNullable();
        table.string('tag').notNullable();
        table.int('amount').notNullable();
        table.decimal('price').notNullable();
        table.string('image').notNullable(); /* a pesquisar tipo*/
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
