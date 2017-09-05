const Customer = require('../../models/customerModel');
const Product = require('../../models/productModel');

function deleteAll(model) {
  return model.where('id', '!=', 0).destroy();
}

async function seed() {
  await deleteAll(Product);       // DELETE all of the products.
  await deleteAll(Customer);      // DELETE all of the customers.

  const [C1, C2, C3,C4, C5, C6, C7, C8] = await Promise.all([
    new Customer({
      customer_code: '10000003', first_name: 'Sufjan', last_name: 'Stevens', phone_number: '1234567890', email: 'email@email.com', delivery_address: '123 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '12340'
    }).save(),
    new Customer({
      customer_code: '10000004', first_name: 'Stev', last_name: 'Sufjan', phone_number: '9234567891', email: 'any@email.com', delivery_address: '456 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '98765'
    }).save(),
    new Customer({
      customer_code: '10000005', first_name: 'John', last_name: 'Sufjan', phone_number: '9234567345', email: 'jim@email.com', delivery_address: '456 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '78694'
    }).save()
    new Customer({
      customer_code: '10000006', first_name: 'John', last_name: 'Stone', phone_number: '6786452381', email: 'john@email.com', delivery_address: '1102 stone drive', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '30081'
    }).save()
    new Customer({
      customer_code: '10000007', first_name: 'Mary', last_name: 'Dan', phone_number: '4045676533', email: 'Mary@email.com', delivery_address: '302 Dan pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30064'
    }).save()
    new Customer({
      customer_code: '10000008', first_name: 'Stone ', last_name: 'Lee', phone_number: '7703457654', email: 'lee@email.com', delivery_address: '1302 sanlee pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30062'
    }).save()
    new Customer({
      customer_code: '10000009', first_name: 'Lary', last_name: 'Paul', phone_number: '6780012090', email: 'lary@email.com', delivery_address: '3022 Dano drive', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '30064'
    }).save()
    new Customer({
      customer_code: '10000010', first_name: 'Tommy', last_name: 'Lee', phone_number: '4042007200', email: 'tommylee@email.com', delivery_address: '3202 Tommy Lee pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30064'
    }).save()









  await Promise.all([
    C1.products().create({ sku_number: '1400000000', product_desc: 'Ring Security Doorbell', price: '199' }),
    C2.products().create({ sku_number: '1400000001', product_desc: 'Ring Security Floodlights', price: '249' }),
    C3.products().create({ sku_number: '1400000002', product_desc: 'Nest Thermostat', price: '199' }),
    C4.products().create({ sku_number: '1400000003', product_desc: 'Ecosmart 100W LED Soft white bulb', price: '19' }),
    C5.products().create({ sku_number: '1400000004', product_desc: 'Ecosmart 75W LED Soft white bulb', price: '15' }),
    C6.products().create({ sku_number: '1400000005', product_desc: 'Ecosmart 65W  BR30 LED soft white bulb', price: '25' }),
    C7.products().create({ sku_number: '1400000006', product_desc: 'Ring Security Doorbell Chimes
    ', price: '99' }),
    C8.products().create({ sku_number: '1400000007', product_desc: 'Ring Security Floodlights', price: '249' })

  ]);

  await servicetype.all([
    C1.servicetype().create({ service_type: 'will call' }),
    C2.servicetype().create({ service_type: 'store delivery'}),
    C3.servicetype().create({ service_type: 'customer carryout'})
  ]);

  await Promise.all([
    C1.orderstage().create(),
    C2.orderstage().create(),
    C3.orderstage().create()
  ]);

  // disconnect from database
  process.exit(0);
}

try {
  seed();
} catch (err) {
  console.error('ERROR:', err);
  process.exit(1);
}


123765346 JOHN STONE 1102 stone drive 30081 6786452381
890543567 MARY DAN 302 Dan pkwy 30064 4045676533
543678111 STONE LEE 7001 lee road 30062 7703457654
100345567 NEW YORK 456 new crescent drive 30085 6780012090
789321456 DON DOW 4029 don way 30080 4042007200
// await servicetype.all([
//   C1.servicetype().create({ service_type: 'will call' }),
//   C2.servicetype().create({ service_type: 'stor delivery'}),
//   C3.servicetype().create({ service_type: 'customer carryout'})
// ]);
//
// await Promise.all([
//   C1.orderstage().create(),
//   C2.orderstage().create(),
//   C3.orderstage().create()
// ]);
/*
exports.seed = function(knex, Promise) {
  return knex('customers').del()
  .then(() => Promise.all([

  ]))
  .then(() => knex('customers').del())
  .then(() => Promise.all([

  ]))
  .then(() => knex('products').del())
  .then(() => Promise.all([
    knex('servicetype').insert({ service_type: 'will call', customer_id: '10000003' }),
    knex('servicetype').insert({ service_type: 'store delivery', customer_id: '10000004' }),
    knex('servicetype').insert({ service_type: 'customer carryout', customer_id: '10000005' })
  ]))
  .then(() => knex('servicetype').del())
  .then(() => Promise.all([
    knex('orderstage').insert({ customer_id: '10000003' }),
    knex('orderstage').insert({ customer_id: '10000004' }),
    knex('orderstage').insert({ customer_id: '10000005' })
  ]))
  // .then(() => knex('orderstage').del())
  .then(() => console.log('data seeded!'));
};
*/
