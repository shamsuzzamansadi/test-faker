const faker = require ('faker');
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let name = faker.name.findName();
console.log(`name: ${name}`);
console.log(`firstname: ${firstName}`);
console.log(`lastname: `)
let emailAddress = `${firstName}` + `${lastName}` + `${Math.random()}`  + '@mailbox.org';

console.log('emailAddress: ',emailAddress);