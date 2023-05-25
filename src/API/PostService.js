import axios from "axios"

class PostService {
    static async fetchPosts (limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
    static async getPostById (post_id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + post_id)
        return response
    }
    static async getPostComments (post_id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        return response
    }
}

export default PostService