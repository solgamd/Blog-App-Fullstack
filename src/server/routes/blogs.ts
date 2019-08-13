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
            res.status(500).json('Uh Oh! Something went wrong.')
        }
    } else {
        try {
            let blogs = await db.blogs.all();
            res.json(blogs);
        } catch (error) {
            console.log(error);
            res.status(500).json('Uh Oh! Something went wrong.')
        }
    }
});

router.post('/', async (req, res) => {
    try {
        let tagId = req.body.selectedTag;
        delete req.body.selectedTag;
        let newBlogId: any = await db.blogs.insert(req.body); 
        await db.blogtags.insert(newBlogId.insertId, tagId);
        res.json({ newBlogId });
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh Oh! Something went wrong.');
    }
});

router.delete('/:blogid', async (req, res) => {
    let id = req.params.blogid;
    try {
        await db.blogtags.remove(id);
        await db.blogs.remove(id);
        res.json('Blog post deleted.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh Oh! Something went wrong.');
    }
});

export default router;