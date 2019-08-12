import { Query } from '../index';

const getTags = () => Query('SELECT * FROM tags');

export default {
    getTags
}