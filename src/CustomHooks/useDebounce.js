import {
    useState,
    useEffect
} from 'react'

export function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value) // initial state

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(value) // setting the value after a time period
        }, delay)

        return () => {
            clearTimeout(timer) // clearing the timeout
        }
    }, [value, delay])

    return debounced //returning the debounced value
}