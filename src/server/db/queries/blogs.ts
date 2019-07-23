import { Connection } from '../index';

const all = async () => {
    return new Promise((resolve, reject) => {

        Connection.query('SELECT * from blogs', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

const one = async (id: number) => {
    return new Promise((resolve, reject) => {
        
        Connection.query(`SELECT blogs.* FROM blogs WHERE id = ${id}`, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all,
    one
    //insert
    //delete
    //search
}