import * as React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Navbar from './Navbar';

export interface HomeProps {}
export interface IBlog {
    
        id: number,
        title: string,
        content: string,
        tag: string
}
 
const Home: React.SFC<HomeProps> = () => {

    const [blogs, setBlogs] = useState<IBlog[]>();

    const getBlogs = async () => {
    try {
        let res = await fetch('/api/blogs');
        let blogs = await res.json();
        setBlogs(blogs);
    } catch (error) {
        console.log(error);
    }};

    useEffect(() => { getBlogs() }, []);

    return (
        <>
        <Navbar />
        <main className="container">
            <section className="row">
                <article className="col-md-6 offset-3">
                    {blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </article>
            </section>
        </main>
        </>
    )
}
 
export default Home;

