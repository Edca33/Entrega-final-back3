import { Router } from 'express';
import { generateMockPets } from '../utils/mockingpets.js';
import { generateMockUsers } from '../utils/mockingUsers.js';
import Users from '../dao/models/User.js'; 
import Pet from '../dao/models/Pet.js ';
// import bcrypt from 'bcrypt';

const router = Router();


router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(100);
    res.json(pets);
});


router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

router.post('/generateData', async (req, res) => {
    const { users = 0, pets = 0 } = req.body;

    try {
        const mockUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);
        
        await Users.insertMany(mockUsers);
        await Pet.insertMany(mockPets);    

        res.json({ message: 'Datos generados e insertados correctamente', users: mockUsers.length, pets: mockPets.length });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar datos', details: error.message });
    }
});

export default router;
