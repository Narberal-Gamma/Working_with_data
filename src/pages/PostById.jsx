import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";

const PostById = () => {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [PostLoading, PostError, fetchPost] = useFetching(async (post_id) => {
        const response = await PostService.getPostById(post_id)
        setPost(response.data)
    })

    const [CommentsLoading, CommentsError, fetchComments] = useFetching(async (post_id) => {
        const response = await PostService.getPostComments(post_id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPost(id)
        fetchComments(id)
    }, [])

    if (PostLoading) {
        return <Loader />
    }

    if (PostError) {
        return <h1>Произошла ошибка {PostError}</h1>
    }

    return (
        <div>
            <h2>{post.id}) {post.title}</h2>
            <hr style={{ margin: '10px 0px' }} />
            <h3>Комментарии к посту</h3>
            <hr style={{ margin: '10px 0px' }} />
            {CommentsLoading && <Loader />}
            {CommentsError && <h1>Произошла ошибка {CommentsError}</h1>}
            {comments.map(comment =>
                <div style={{ border: '1px solid gray', padding: 15, margin: '10px 0px' }} key={comment.id}>
                    <strong>{comment.name}:</strong>
                    <br /> {comment.body}
                </div>
            )}
        </div>
    )
}

export default PostById