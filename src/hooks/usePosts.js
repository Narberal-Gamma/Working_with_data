import { useMemo } from "react"

export const useSortedPosts = (sortType, posts) => {
    const sortedPosts = useMemo(() => {
        if (sortType) {
            return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
        }
        return posts
    }, [sortType, posts])
    return sortedPosts
}

export const usePosts = (posts, searchQuery, sortType) => {
    const sortedPosts = useSortedPosts(sortType, posts)
    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])
    return sortedAndFilteredPosts
}