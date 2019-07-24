import * as React from 'react';
import blogs from '../../server/db/queries/blogs';

export interface BlogCardProps {
    blog: {
        title: string,
        content: string,
        tag: string
    }
}
 
const BlogCard: React.SFC<BlogCardProps> = props => {
    return (
        <main className="card m-3 shadow">
            <section className="card-title m-1">{props.blog.title}</section>
                <article className="card-body">
                    {props.blog.content}
                    <span className="badge badge-pill badge-success">{props.blog.tag}</span> 
                </article>
        </main>
      );
}
 
export default BlogCard;