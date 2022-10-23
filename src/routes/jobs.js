import { Router } from 'express';
import { deleteJob, getJob, getJobCount, getJobs, saveJob, updateJob } from '../controllers/jobs';

const router = Router()

router.get('/jobs', getJobs)
router.get('/jobs/count', getJobCount)
router.get('/jobs/:id', getJob)
router.post('/jobs', saveJob)
router.delete('/jobs/:id', deleteJob)
router.put('/jobs/:id', updateJob)

export default router