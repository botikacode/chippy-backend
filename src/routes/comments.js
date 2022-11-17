import { Router } from 'express';
import { deleteComment, getComments, getCommentsCount, getComment, saveComment, updateComment } from '../controllers/comments';

const router = Router()

router.get('/comments', getComments)
router.get('/comments/count', getCommentsCount)
router.get('/comments/:id', getComment)
router.post('/comments', saveComment)
router.delete('/comments/:id', deleteComment)
router.put('/comments/:id', updateComment)

export default router
