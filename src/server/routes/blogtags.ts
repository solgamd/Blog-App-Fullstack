import { Router } from 'express';
import db from '../db';

const router = Router();

router.put('/:blogid', async (req, res) => {
    try {
        await db.blogtags.edit(req.params.blogid, req.body.tagid);
        res.json('Blogtag edited successfully.')
        console.log(req.params.blogid, req.body.tagid)
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your PUT request in blogtags.')
    }
})
export default router;