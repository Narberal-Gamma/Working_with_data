import React from "react";
import './Post.css'
import Button from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, removePost }) => {

    const navigate = useNavigate()

    return (
        <div className="single__post">
            <div>
                <strong>{post.id}) {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <Button onClick={() => navigate(`/post/${post.id}`) }>Открыть</Button>
            <Button onClick={() => removePost(post.id)}>Удалить</Button>
        </div>
    )
}

export default PostItem