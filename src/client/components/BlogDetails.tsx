import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { IBlog, ITag } from '../utils/interfaces';

export interface BlogDetailsProps {
    blog: IBlog,
    tags: ITag[]
}

const BlogDetails: React.SFC<BlogDetailsProps> = ({ blog, tags }) => {
    return (
        <article className="col-md-10 offset-1">
            <div className="card shadow">
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <h6 className="card-title">Sing along with: {blog.name}</h6>
                    {tags.map(tag => (
                        <span key={`tag-${tag.id}`} className="badge badge-primary badge-pill m-1">{tag.name}</span>
                    ))}
                    <p className="card-text mt-3">{blog.content}</p>
                    <p className="text-muted">{moment(blog._created).format('MMM Do YYYY')}</p>
                    <Link to="/" className="btn btn-primary btn-block m-1 shadow-sm">Back To Blog Feed</Link>
                </div>
            </div>
        </article>
    );
}

export default BlogDetails;