import { Query } from '../index';

//Blogs Table = id, title, content, authorid, _created

const all = () => 
    Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid ORDER BY _created DESC');

const one = (id: number) => 
    Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

const insert = (title: string, content: string, authorid: number) => 
    Query('INSERT INTO blogs (title, content, authorid) VALUE (?)', [[title, content, authorid]]);

const remove = (id: number) => 
    Query('DELETE FROM blogs WHERE id = ?', [id]);

const edit = (id: number, title: string, content: string) => 
    Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, id]);

export default {
    all,
    one,
    insert,
    remove,
    edit

}