import { Router } from 'express';
import { getUserComments, deleteComment, getComments, getCommentsCount, getComment, saveComment, updateComment } from '../controllers/comments';

const router = Router()

router.get('/comments', getComments)
router.get('/comments/profile/:profileOwnerId', getUserComments)
router.get('/comments/count', getCommentsCount)
router.get('/comments/:id', getComment)
router.post('/comments', saveComment)
router.delete('/comments/:id', deleteComment)
router.put('/comments/:id', updateComment)

export default router
