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
        <div>
        <h1 className="row mt-3 justify-content-center">Home Blog Feed</h1>
        <section className="row mt-3">
            {/* <article className="col-10"> */}
                {blogs.map(blog => (
                    <BlogPreview key={`blog-${blog.id}`} blog={blog} />
                ))}
            {/* </article> */}
        </section>
        </div>
    )
}

export default Home;

