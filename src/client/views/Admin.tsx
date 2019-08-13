import * as React from 'react';
import { useState } from 'react';
import { IBlog } from '../utils/interfaces';
import { useEffect } from 'react';

export interface AdminProps { }
 
const Admin: React.FC<AdminProps> = () => {

    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        (async () => {
            let res = await fetch('/api/blogs');
            let blogs = await res.json();
            setBlogs(blogs);
        })();
    }, []);

    return (
        <section className="row justify-content-center">
            <ul className="list-group shadow">
                {blogs.map(blog => <li key={`blog-${blog.id}`} className="list-group-item m-1 shadow">{blog.title}</li>)}
            </ul>
        </section>
      );
}
 
export default Admin;