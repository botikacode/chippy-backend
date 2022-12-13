import { Router } from 'express';
import { getPetJobs, getPetJobByJobId, savePetJob, deletePetJob, savePet, updatePetJob} from '../controllers/petJobs';

const router = Router()

router.get('/petJobs', getPetJobs)
router.get('/petJobs/job-pets/:jobId', getPetJobByJobId)
router.post('/petJobs/create', savePetJob)
router.delete('/petJobs/:id', deletePetJob)
router.put('/petJobs/:id', updatePetJob)

export default router
