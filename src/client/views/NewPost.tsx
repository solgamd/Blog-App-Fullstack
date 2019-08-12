import * as React from 'react';
import { useState } from 'react';

export interface NewPostProps { }

const NewPost: React.SFC<NewPostProps> = () => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const [tagId, setTagId] = useState<string>('0');


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Testing Post submit");
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
                
                <label>Tag</label>
                <select
                value={tagId}
                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setTagId(e.target.value)}>
                    <option value="0">Select a tag...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
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