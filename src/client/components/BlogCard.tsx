import * as React from 'react';

export interface BlogCardProps {
    
}
//blogtag.name to pass into span badge-pill
 
const BlogCard: React.SFC<BlogCardProps> = () => {
    return (
        <main className="card m-3 shadow">
            <section className="card-title m-1">
                <article className="card-body">
                    <span className="badge badge-pill badge-success"></span> 
                </article>
            </section>
        </main>
      );
}
 
export default BlogCard;