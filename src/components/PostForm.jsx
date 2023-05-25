import React, { useState } from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const PostForm = ({createPost}) => {

    const [newPost, setNewPost] = useState({ title: '', body: '' })

    const addNewPost = (event) => {
        event.preventDefault()
        const newCreatedPost = {
            id: Date.now(),
            ...newPost
        }
        createPost(newCreatedPost)
        setNewPost({title: '', body: ''})
    }

    return (
        <form>
            <Input
                value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                type='text'
                placeholder='Название поста'
            />
            <Input
                value={newPost.body}
                onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                type='text'
                placeholder='Описание поста'
            />
            <Button onClick={addNewPost}>Добавить пост</Button>
        </form>
    )
}

export default PostForm