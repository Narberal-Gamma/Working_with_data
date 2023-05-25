import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, canLoad, callback) => {
    const observer = useRef()
    console.log(isLoading)
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect()
        let cb = (entry, observer) => {
            if (entry[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}