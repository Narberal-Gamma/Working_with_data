import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostById from "../pages/PostById";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Posts />},
            { path: '/posts', element: <Posts />},
            { path: '/about', element: <About />},
            { path: '/post/:id', element: <PostById />}
        ]
    }
])