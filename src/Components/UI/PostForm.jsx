import React, { useState } from 'react';
import Input from './Input/Input';
import MyButton from './MyButton/MyButton';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ body: '', title: '' });
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <Input type='text' placeholder='name of the post' value={post.title} 
            onChange={e => setPost({ ...post, title: e.target.value })} />
            <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type='text' placeholder='description of the post' />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;