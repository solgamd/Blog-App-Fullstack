import * as React from 'react';
import * as moment from 'moment';
import { IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';
export interface BlogPreviewProps {
    blog: IBlog
}
 
const BlogPreview: React.SFC<BlogPreviewProps> = ({ blog }) => { //destructuring blog to pass props more easily
    return (
        <div>
            <article className="cold-md-4">
                <div className="card m-1 shadow">
                    <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                        <p className="card-text">{blog.content.substring(0, 20)} ...</p>
                    </div>
                    <div className="card-footer">
                        <p className="text-muted">Written by {blog.name} on {moment(blog._created).format('MMM Do YYYY')}</p>
                    </div>
                    <Link to={`/${blog.id}`} className="btn btn-primary btn-block m-1">Read More</Link>
                </div>
            </article>
        </div>
      );
}
 
export default BlogPreview;