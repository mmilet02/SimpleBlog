import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPanding(false)
                setError(null)
            })
            .catch(err => {
                setIsPanding(false)
                setError(err.message)
            })
    }, [url])
    return ({ data, isPanding, error })
}

export default useFetch
