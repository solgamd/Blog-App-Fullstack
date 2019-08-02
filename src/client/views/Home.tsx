import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import BlogPreview from '../components/BlogPreview';

export interface HomeProps { }

const Home: React.SFC<HomeProps> = props => {

    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/blogs');//Option: put URL in a separate file in case of changes
                let blogs = await res.json();
                setBlogs(blogs);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <section className="row">
            <article className="col-md-6 offset-3">
                {blogs.map(blog => (
                    <BlogPreview key={`blog-${blog.id}`} blog={blog} />
                ))}
            </article>
        </section>
    )
}

export default Home;

