import { Router } from 'express';
import { deleteJob, getJob, getJobsCount, getJobs, saveJob, updateJob, getPetsJob, addPetJob, getJobsUser, getJobsNotUser} from '../controllers/jobs';

const router = Router()

router.get('/jobs', getJobs)
router.get('/jobs/count', getJobsCount)
router.get('/jobs/:id', getJob)
router.post('/jobs', saveJob)
router.delete('/jobs/:id', deleteJob)
router.put('/jobs/:id', updateJob)
router.get('/jobs-User/:id', getJobsUser)
router.get('/jobs-Not-User/:id', getJobsNotUser)
router.get('/jobs-Pets/:id', getPetsJob)
router.post('/jobs-Pets', addPetJob)

export default router
