import { useMemo } from "react"

export const usePagination = (totalPagesCount) => {
    const getPagesArray = useMemo(() => {
        const pages = []
        for (let i = 1; i <= totalPagesCount; i++) {
            pages.push(i)
        }
        return pages
    }, [totalPagesCount])
    return getPagesArray
}