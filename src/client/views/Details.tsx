import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IBlog, ITag } from '../utils/interfaces';
import BlogDetails from '../components/BlogDetails';

export interface DetailsProps extends RouteComponentProps<{ blogid: string }> { }

const Details: React.SFC<DetailsProps> = props => {

    const [blog, setBlog] = useState<IBlog>({
        id: 0,
        title: '',
        content: '',
        authorid: 0,
        _created: new Date(),
        name: ''
    });

    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        (async () => {
            let blogid = props.match.params.blogid;
            try {
                let res = await fetch(`/api/blogs/${blogid}`);
                let data = await res.json();
                setBlog(data[0]);
                setTags(data[1]);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [props.match.params.blogid]);

    return (
    
        <section className="row mt-5">
            <BlogDetails blog={blog} tags={tags} />
        </section>
    
    );
}

export default Details;