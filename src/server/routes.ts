import { Router } from 'express';
import db from './db';

const router = Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        let blogs = await db.Blogs.all();
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/indiv/:id', async (req, res) => {
    try {
        let blog = await db.Blogs.one(req.body.id);
        res.json(blog);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;