import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';
import { generateMockPets } from '../utils/mockingpets.js';

const router = Router();

router.get('/mockingpets', async (req, res) => {
    const pets = await generateMockPets(1000);
    res.json(pets);
});


router.get('/',adoptionsController.getAllAdoptions);
router.get('/:aid',adoptionsController.getAdoption);
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;