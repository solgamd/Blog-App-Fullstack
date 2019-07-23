import * as mysql from 'mysql';
import config from '../config';
import Blogs from './queries/blogs';

export const Connection = mysql.createConnection(config.mysql);

console.log(config.mysql); //to troubleshoot db connection errors

Connection.connect(err => {
    if(err) console.log(err);
});

export default {
    Blogs
}