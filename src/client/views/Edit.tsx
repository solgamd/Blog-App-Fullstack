import * as React from 'react';
import { useState, useEffect } from 'react';
import { ITag, IBlog } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';

export interface EditProps extends RouteComponentProps<{ blogid: string }> { }

const Edit: React.SFC<EditProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const [selectedTag, setSelectedTag] = useState<string>('0');
    const [tags, setTags] = useState<ITag[]>([]);
    const [blog, setBlog] = useState<IBlog[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/blogs/${props.match.params.blogid}`);
                let blog = await res.json();
                setBlog(blog);
                setTitle(blog[0].title);
                setContent(blog[0].content);
                let data = await fetch(`/api/tags`);
                let tags = await data.json();
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let id = props.match.params.blogid;
        try {
            await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, content })
            });
            await fetch(`/api/blogtags/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ tagid: selectedTag })
            });
        } catch (error) {
            console.log(error);
        }
        props.history.push('/');
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
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTag(e.target.value)}>
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
                    onClick={handleEdit}
                    className="btn btn-primary btn-block mt-3 shadow-lg">Edit Post</button>

            </form>
        </section>
    );
}

export default Edit;