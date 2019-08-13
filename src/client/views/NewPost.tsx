import * as React from 'react';
import { useState, useEffect } from 'react';
import { ITag } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';

export interface NewPostProps extends RouteComponentProps{ }

const NewPost: React.SFC<NewPostProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const [selectedTag, setSelectedTag] = useState<string>('0');
    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/tags');
                let tags = await res.json();
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: { "Content-type": "application/json"},
                body: JSON.stringify({ title, content, authorid: 1 })
            });
            props.history.push('/');
        } catch (error) {
            console.log(error);   
        }
    }

    return (
        <section className="row justify-content-center mt-5">
            <form className="col-md-6 form-group p-3 shadow">
                <label>Blog Title</label>
                <input
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                />
                
                <label className="mt-4">Tag</label>
                <select
                className="form-control p-1 my-1"
                value={selectedTag}
                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSelectedTag(e.target.value)}>
                    <option value="0">Select a tag...</option>
                    {tags.map(tag => (
                        <option key={`option-${tag.id}`} value={tag.id}>{tag.name}</option>
                ))}
                </select>

                <label className="mt-4">Blog Content</label>
                <textarea
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                    className="form-control"
                    rows={10}
                />

                <button
                    onClick={handleSubmit}
                    className="btn btn-primary btn-block mt-3 shadow-lg">Create New Post</button>

            </form>
        </section>
    );
}

export default NewPost;