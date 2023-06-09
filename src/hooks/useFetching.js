import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setIsError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [isLoading, isError, fetching]
}