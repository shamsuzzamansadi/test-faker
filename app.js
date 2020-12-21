const faker = require ('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

console.log(`firstname: ${firstName}`);
console.log(`lastname: ${lastName}`)
let emailAddress = `${firstName}` + `${lastName}` + `${Math.random()}`  + '@mailbox.org';

console.log('emailAddress: ',emailAddress);