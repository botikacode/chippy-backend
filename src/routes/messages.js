import { Router } from 'express';
import { getMessages, saveMessage } from '../controllers/messages';

const router = Router()

router.get('/messages', getMessages)
router.post('/messages', saveMessage)

export default router