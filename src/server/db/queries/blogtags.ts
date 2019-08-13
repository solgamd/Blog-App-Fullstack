import { Query } from '../index';

const getBlogTags = (blogid: number) => Query('CALL spGetBlogTags(?)', [blogid]);

const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?)', [[blogid, tagid]]); 

const remove = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);

const edit = (blogid: number, tagid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid, tagid]);


export default {
    getBlogTags,
    insert,
    remove, 
    edit
}