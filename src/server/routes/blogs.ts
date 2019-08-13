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
            res.status(500).json('Something went wrong with your GET request in blogs.')
        }
    } else {
        try {
            let blogs = await db.blogs.all();
            res.json(blogs);
        } catch (error) {
            console.log(error);
            res.status(500).json('Something went wrong with your GET request in blogs.')
        }
    }
});

router.post('/', async (req, res) => {
    try {
        let tagId = req.body.selectedTag;
        delete req.body.selectedTag;
        let newBlogId: any = await db.blogs.insert(req.body.title, req.body.content, req.body.authorid); 
        await db.blogtags.insert(newBlogId.insertId, tagId);
        res.json({ newBlogId });
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your POST request in blogs.');
    }
});

router.delete('/:blogid', async (req, res) => {
    try {
        await db.blogtags.remove(req.params.blogid);
        await db.blogs.remove(req.params.blogid);
        res.json('Blog post deleted.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your DELETE request in blogs.');
    }
});

router.put('/:blogid', async (req, res) => {
    try {
        await db.blogs.edit(req.params.blogid, req.body.title, req.body.content);
        res.json('Blog edited successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your PUT request in blogs.');
    }
});

export default router;