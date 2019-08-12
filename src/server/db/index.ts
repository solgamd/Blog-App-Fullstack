import * as mysql from 'mysql';
import config from '../config'; //automaticall finds index file

export const pool = mysql.createPool(config.mysql);

export const Query = (query:string, values?: any) => {
    return new Promise<Array<any>> ((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) reject(err);
            console.log(err);
            return resolve(results);
        })
    })
}

import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';

export default {
    blogs,
    blogtags,
    tags
}