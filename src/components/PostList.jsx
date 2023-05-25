import React from "react";
import PostItem from "./PostItem";
import './Post.css'

const PostList = ({ posts, title, removePost }) => {

    if (!posts.length){
        return <h1>Посты не найдены!</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts?.map((post, index) =>
                <PostItem post={post} key={index} removePost={removePost} />
            )}
        </div>
    )
}

export default PostList