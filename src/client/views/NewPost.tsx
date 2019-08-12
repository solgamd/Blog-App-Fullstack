import * as React from 'react';
import { useState } from 'react';

export interface NewPostProps {}

const NewPost: React.SFC<NewPostProps> = () => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
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