import { Query } from '../index';

//Blog = id, title, content, authorid, _created

export interface INewBlog {
    title: string, 
    content: string, 
    authorid: number
}

const all = () => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid');

const one = (id: number) => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

const insert = ({ title, content, authorid }: INewBlog) => Query('INSERT INTO blogs (title, content, authorid) VALUE (?)', [title, content, authorid]);

export default {
    all,
    one,
    insert    
    //delete
    //search
}