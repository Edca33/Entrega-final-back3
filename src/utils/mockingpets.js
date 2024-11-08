import { faker } from '@faker-js/faker';

export function generateMockPets(count = 100) {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.person.firstName(), 
            specie: faker.animal.type(),  
            age: faker.number.int({ min: 1, max: 15 }),
            adopted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    return pets;
}