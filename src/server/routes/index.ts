import { Router } from 'express';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import blogtagsRouter from './blogtags';

const router = Router();

router.use('/blogs', blogsRouter);
router.use('/tags', tagsRouter)
router.use('/blogtags', blogtagsRouter);

export default router;