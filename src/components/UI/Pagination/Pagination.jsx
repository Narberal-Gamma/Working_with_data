import React from "react";
import cl from './Pagination.module.css'
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPostPageCount, postsPage, setPostsPage }) => {

    const pages = usePagination(totalPostPageCount)

    return (
        <div>
            <div className={cl.wrapper}>
                {pages.map(page =>
                    <span
                        className={postsPage !== page ? cl.page : `${cl.page + " " + cl.current}`}
                        onClick={() => setPostsPage(page)}
                        key={page}
                    >{page}</span>
                )}
            </div>
        </div>
    )
}

export default Pagination