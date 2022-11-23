import { Router } from 'express';
import { getMessages, saveMessage, getUserMessages, getChatMessages } from '../controllers/messages';

const router = Router()

router.get('/messages', getMessages)
router.get('/messages/:userId', getUserMessages)
router.get('/messages/chat/:chatId', getChatMessages)
router.post('/messages', saveMessage)

export default router