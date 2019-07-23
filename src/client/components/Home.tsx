import * as React from 'react';
import { useState, useEffect } from 'react';

export interface HomeProps {}
export interface HomeState {
    blog: {
        id: number,
        title: string,
        content: string,
        tag: string
    }[],
}
 
const Home: React.SFC<HomeProps> = () => {

    const [blogs, setBlogs] = useState([]);

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
        <main className="container">
            <section className="row">
                <article className="col-md-6 offset-3">
                    {blogs.map(blog => (
                        <p>{blog}</p>
                    ))}
                </article>
            </section>
        </main>
    )
}
 
export default Home;

