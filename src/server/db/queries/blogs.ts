import { Query } from '../index';

//Blogs Table = id, title, content, authorid, _created


const all = () => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid');

const one = (id: number) => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

const insert = ({ title, content, authorid }: { title: string, content: string, authorid: number }) => Query('INSERT INTO blogs (title, content, authorid) VALUE (?)', [title, content, authorid]);

export default {
    all,
    one,
    insert    
    //delete
    //search
}