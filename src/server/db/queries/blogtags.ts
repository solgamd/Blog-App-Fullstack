import { Query } from '../index';

const getBlogTags = (blogid: number) => Query('CALL spGetBlogTags(?)', [blogid]);

export default {
    getBlogTags
}