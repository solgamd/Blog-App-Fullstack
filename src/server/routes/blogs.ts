import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:blogid?', async (req, res) => {
    let blogid = req.params.blogid;
    if (blogid) {
        try {
            let [blogtags]: any = await db.blogtags.getBlogTags(blogid);
            let [blog]: any = await db.blogs.one(blogid);
            res.json([blog, blogtags]);
        } catch (error) {
            console.log(error);
            res.sendStatus(500).json('Uh Oh! Something went wrong.')
        }
    } else {
        try {
            let blogs = await db.blogs.all();
            res.json(blogs);
        } catch (error) {
            console.log(error);
            res.sendStatus(500).json('Uh Oh! Something went wrong.')
        }
    }
});

router.post('/', async (req, res) => {
    try {
        let { title, content, authorid } = req.body;
        let result: any = await db.blogs.insert({title, content, authorid});
        res.json(result);
        console.log('success!')
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json('Uh Oh! Something went wrong.')
    }
});

export default router;