import React, { useEffect, useRef, useState } from "react";
import PostList from '../components/PostList'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/UI/Loader/Loader";
import PostService from "../API/PostService";
import Modal from '../components/UI/Modal/Modal'
import Button from '../components/UI/Button/Button'
import { getPagesCount } from '../utils/pages'
import Pagination from '../components/UI/Pagination/Pagination'
import Select from '../components/UI/Select/Select'
import { useObserver } from "../hooks/useObserver";

const Posts = () => {

    const [filter, setFilter] = useState({ query: '', sort: '' })
    const [posts, setPosts] = useState([])
    const [isModal, setIsModal] = useState(false)
    const [postLimit, setPostLimit] = useState(10)
    const [postsPage, setPostsPage] = useState(1)
    const [totalPostPageCount, setTotalPostPageCount] = useState(0)
    const lastElement = useRef()

    const [PostsLoader, PostsError, fetchPosts] = useFetching(async (limit, page) => {
        const response = await PostService.fetchPosts(limit, page)
        const totalPageCount = response.headers['x-total-count']
        setTotalPostPageCount(getPagesCount(totalPageCount, limit))
        setPosts([...posts, ...response.data])
    })

    const sortedAndFilteredPosts = usePosts(posts, filter.query, filter.sort)

    useObserver(lastElement, PostsLoader, postsPage < totalPostPageCount, () => {
        setPostsPage(postsPage + 1)
    })

    useEffect(() => {
        fetchPosts(postLimit, postsPage)
    }, [postLimit, postsPage])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts])
        setIsModal(false)
    }

    const removePost = (post_id) => {
        setPosts(posts.filter(post => post.id !== post_id))
    }

    return (
        <div className="posts">
            <Button onClick={() => setIsModal(true)}>Создать пост</Button>
            <Modal isModal={isModal} setIsModal={setIsModal}>
                <PostForm createPost={createPost} />
            </Modal>
            <hr style={{ margin: '15px 0px' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <br />
            <Select
                value={postLimit}
                onChange={setPostLimit}
                defaultValue='Выбрать количества'
                options={[
                    { value: 10, name: '10 постов' },
                    { value: 15, name: '15 постов' },
                    { value: 20, name: '20 постов' },
                    { value: 30, name: '30 постов' }
                ]}
            />
            {PostsLoader && <Loader />}
            {PostsError && <h1 style={{ color: 'crimson' }}>Произошла ошибка!</h1>}
            <PostList posts={sortedAndFilteredPosts} title='Список постов 1' removePost={removePost} />
            <div ref={lastElement} style={{height: 20, background: 'crimson'}}></div>
            <Pagination totalPostPageCount={totalPostPageCount} postsPage={postsPage} setPostsPage={setPostsPage} />
        </div>
    )
}

export default Posts